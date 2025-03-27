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
            SELECT recipe_id, recipe_name, recipe_slug, star_rating, recipe_image_url, work_in_progress
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

// API to fetch a single recipe in Template.json form by slug
app.get('/api/recipes/:slug', async (req, res) => {
    const { slug } = req.params;

    try {
        const recipeInfo = await client.query(`
            SELECT 
                r.recipe_id AS id,
                r.recipe_name,
                r.star_rating,
                r.author_name,
                r.recipe_slug,
                r.credit_link,
                r.recipe_description,
                r.recipe_image_url,
                r.prep_time_mins,
                r.total_time_mins,
                r.servings,
                nc.chef_name AS notable_chef,
                co.country_name AS country_of_origin,
                r.work_in_progress,
                COALESCE(json_agg(DISTINCT rn.note_text) FILTER (WHERE rn.note_text IS NOT NULL), '[]') AS recipe_notes
            FROM recipes r
            LEFT JOIN notable_chefs nc ON r.notable_chef_id = nc.chef_id
            LEFT JOIN country_of_origin co ON r.country_of_origin_id = co.country_id
            LEFT JOIN recipe_notes rn ON r.recipe_id = rn.recipe_id
            WHERE r.recipe_slug = $1
            GROUP BY r.recipe_id, nc.chef_name, co.country_name;
        `, [slug]);
        
        const recipeIngredients = await client.query(`
            SELECT 
                json_agg(
                    json_build_object(
                        'component_name', ic.component_title,
                        'ingredients', (
                            SELECT json_agg(
                                json_build_object(
                                    'quantity', i.quantity,
                                    'name', i.ingredient_text,
                                    'ingredient_notes', i.ingredient_notes
                                )
                            )
                            FROM ingredients i
                            WHERE i.component_id = ic.component_id
                        )
                    )
                ) AS recipe_components
            FROM ingredient_components ic
            WHERE ic.recipe_id = (SELECT recipe_id FROM recipes WHERE recipe_slug = $1);
            `, [slug]);


        const recipeInstructions = await client.query(`
            SELECT 
                json_agg(
                    json_build_object(
                        'step_title', rc.component_title,
                        'steps', (
                            SELECT json_agg(
                                json_build_object(
                                    'step_number', cs.step_number,
                                    'instruction', cs.step_description,
                                    'step_notes', cs.step_notes,
                                    'step_images', (
                                        SELECT COALESCE(json_agg(csi.image_url), '[]')
                                        FROM component_step_images csi
                                        WHERE csi.step_id = cs.step_id
                                    )
                                )
                                ORDER BY cs.step_number
                            )
                            FROM component_steps cs
                            WHERE cs.component_id = rc.component_id
                        )
                    )
                ) AS instructions
            FROM recipe_components rc
            WHERE rc.recipe_id = (SELECT recipe_id FROM recipes WHERE recipe_slug = $1);
            `, [slug]);

        const recipeTags = await client.query(`
            SELECT json_build_object(
                'allergies', (
                    SELECT COALESCE(json_agg(at.allergy_name), '[]') 
                    FROM recipe_allergy_types rat
                    JOIN allergy_types at ON rat.allergy_type_id = at.allergy_type_id
                    WHERE rat.recipe_id = r.recipe_id
                ),
                'cook_time', (
                    SELECT COALESCE(json_agg(ctt.cook_time_name), '[]')
                    FROM recipe_cook_time_types rct
                    JOIN cook_time_types ctt ON rct.cook_time_type_id = ctt.cook_time_type_id
                    WHERE rct.recipe_id = r.recipe_id
                ),
                'diet_type', (
                    SELECT COALESCE(json_agg(dt.diet_type_name), '[]') 
                    FROM recipe_diet_types rdt
                    JOIN diet_types dt ON rdt.diet_type_id = dt.diet_type_id
                    WHERE rdt.recipe_id = r.recipe_id
                ),
                'dish_type', (
                    SELECT COALESCE(json_agg(dt.dish_type_name), '[]') 
                    FROM recipe_dish_types rdt
                    JOIN dish_types dt ON rdt.dish_type_id = dt.dish_type_id
                    WHERE rdt.recipe_id = r.recipe_id
                ),
                'equipment', (
                    SELECT COALESCE(json_agg(et.equipment_name), '[]') 
                    FROM recipe_equipment_types ret
                    JOIN equipment_types et ON ret.equipment_type_id = et.equipment_type_id
                    WHERE ret.recipe_id = r.recipe_id
                ),
                'meal_type', (
                    SELECT COALESCE(json_agg(mt.meal_type_name), '[]') 
                    FROM recipe_meal_types rmt
                    JOIN meal_types mt ON rmt.meal_type_id = mt.meal_type_id
                    WHERE rmt.recipe_id = r.recipe_id
                ),
                'protein_type', (
                    SELECT COALESCE(json_agg(pt.protein_type_name), '[]') 
                    FROM recipe_protein_types rpt
                    JOIN protein_types pt ON rpt.protein_type_id = pt.protein_type_id
                    WHERE rpt.recipe_id = r.recipe_id
                )
            ) AS tags
            FROM recipes r
            WHERE r.recipe_slug = $1;
            `, [slug]);

        console.dir(recipeIngredients.rows[0], { depth: null });
        res.json({
            ...recipeInfo.rows[0],
            ...recipeIngredients.rows[0],
            ...recipeInstructions.rows[0],
            ...recipeTags.rows[0],
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }







    /*
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
    */
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});