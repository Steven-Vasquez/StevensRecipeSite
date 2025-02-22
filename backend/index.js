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

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});