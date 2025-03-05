const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const app = express();
const port = 3001;
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.DATABASE_URL);

// Database connection
const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

client.connect();

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// API to fetch basic recipe information for Browsing Preview 
app.get('/api/recipes/basic-info', async (req, res) => {
    try {
        const result = await client.query(`
            SELECT recipe_id, recipe_name, star_rating, recipe_image_url, work_in_progress
            FROM recipes
        `);
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching recipes:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/:slug', async (req, res) => {
    try {
      const { slug } = req.params;
      
      // Validate slug format
      if (!/^[a-z0-9-]+$/.test(slug)) {
        return res.status(400).json({ error: 'Invalid recipe slug format' });
      }
  
      const result = await client.query(
        `SELECT ... WHERE recipe_slug = $1`,
        [slug]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
  
      res.json(result.rows[0]);
      
    } catch (err) {
      console.error(`Error fetching recipe ${req.params.slug}:`, err);
      res.status(500).json({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? err.message : null
      });
    }
  });

// API to fetch a single recipe by slug
app.get('/api/recipes/:slug', async (req, res) => {
    try {
        const result = await client.query(`
            SELECT 
            r.*,
            COALESCE(json_agg(DISTINCT jsonb_build_object(
                'allergy_name', a.allergy_name
            )) FILTER (WHERE a.allergy_name IS NOT NULL), '[]') AS allergies,
            COALESCE(json_agg(DISTINCT jsonb_build_object(
                'diet_type_name', d.diet_type_name
            )) FILTER (WHERE d.diet_type_name IS NOT NULL), '[]') AS diets,
            COALESCE(json_agg(DISTINCT jsonb_build_object(
                'dish_type_name', dt.dish_type_name
            )) FILTER (WHERE dt.dish_type_name IS NOT NULL), '[]') AS dish_types,
            COALESCE(json_agg(DISTINCT jsonb_build_object(
                'note_text', n.note_text
            )) FILTER (WHERE n.note_text IS NOT NULL), '[]') AS notes,
            json_agg(
                jsonb_build_object(
                    'component_title', c.component_title,
                    'ingredients', COALESCE(
                        (SELECT json_agg(jsonb_build_object(
                            'quantity', i.quantity,
                            'ingredient_text', i.ingredient_text,
                            'ingredient_notes', i.ingredient_notes
                        )) 
                        FROM ingredients i
                        WHERE i.component_id = c.component_id
                    ), '[]'),
                    'steps', COALESCE(
                        (SELECT json_agg(jsonb_build_object(
                            'step_description', s.step_description,
                            'step_notes', s.step_notes
                        )) 
                        FROM component_steps s
                        WHERE s.component_id = c.component_id
                    ), '[]')
                )
            ) AS components
        FROM recipes r
        LEFT JOIN recipe_allergy_types rat ON r.recipe_id = rat.recipe_id
        LEFT JOIN allergy_types a ON rat.allergy_type_id = a.allergy_type_id
        LEFT JOIN recipe_diet_types rdt ON r.recipe_id = rdt.recipe_id
        LEFT JOIN diet_types d ON rdt.diet_type_id = d.diet_type_id
        LEFT JOIN recipe_dish_types rdish ON r.recipe_id = rdish.recipe_id
        LEFT JOIN dish_types dt ON rdish.dish_type_id = dt.dish_type_id
        LEFT JOIN recipe_notes n ON r.recipe_id = n.recipe_id
        LEFT JOIN ingredient_components c ON r.recipe_id = c.recipe_id
        WHERE r.recipe_slug = $1
        GROUP BY r.recipe_id;
        `, [req.params.slug]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});