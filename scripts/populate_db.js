const { Client } = require('pg');
const fs = require('fs');

// Load environment variables
require('dotenv').config();

// Database connection
const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

// Load JSON data
const recipeData = JSON.parse(fs.readFileSync('./backend/database/data/RecipeData.json', 'utf8'));

// Helper function to insert data into a table
async function insertData(tableName, data) {
    const columns = Object.keys(data).join(', ');
    const values = Object.values(data);
    const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');

    const query = {
        text: `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders}) RETURNING *`,
        values: values,
    };

    try {
        const result = await client.query(query);
        console.log(`Inserted into ${tableName}:`, data);
        return result.rows[0]; // Return the inserted row
    } catch (err) {
        console.error(`Error inserting into ${tableName}:`, err);
        throw err;
    }
}

// Helper function to get or insert a type (e.g., notable_chef, country_of_origin)
async function getOrInsertType(tableName, columnName, value) {
    // Check if the value already exists
    const query = {
        text: `SELECT * FROM ${tableName} WHERE ${columnName} = $1`,
        values: [value],
    };

    const result = await client.query(query);
    if (result.rows.length > 0) {
        // Return the existing row
        return result.rows[0];
    } else {
        // Insert the new row
        return await insertData(tableName, { [columnName]: value });
    }
}

// Insert a recipe and its related data
async function insertRecipe(recipe) {
    try {
        // Insert notable_chef
        const chef = await getOrInsertType('notable_chefs', 'chef_name', recipe.notable_chef);

        // Insert country_of_origin
        const country = await getOrInsertType('country_of_origin', 'country_name', recipe.country_of_origin);

        // Insert the recipe
        const recipeRow = await insertData('recipes', {
            recipe_name: recipe.recipe_name,
            recipe_slug: recipe.recipe_slug,
            star_rating: recipe.rating,
            author_name: recipe.author_name,
            credit_link: recipe.credit_link,
            recipe_description: recipe.recipe_description,
            recipe_image_url: recipe.recipe_image_url,
            prep_time_mins: recipe.prep_time_mins,
            total_time_mins: recipe.total_time_mins,
            servings: recipe.servings,
            notable_chef_id: chef.chef_id,
            country_of_origin_id: country.country_id,
            work_in_progress: recipe.work_in_progress,
        });

        // Insert recipe_components and ingredients
        for (const component of recipe.recipe_components) {
            const componentRow = await insertData('ingredient_components', {
                recipe_id: recipeRow.recipe_id,
                component_title: component.component_name,
            });

            for (const ingredient of component.ingredients) {
                await insertData('ingredients', {
                    component_id: componentRow.component_id,
                    quantity: ingredient.quantity,
                    ingredient_text: ingredient.name,
                    ingredient_notes: ingredient.ingredient_notes,
                });
            }
        }

        // Insert instructions and step_images
        for (const instruction of recipe.recipe_instructions) {
            const instructionRow = await insertData('recipe_components', {
                recipe_id: recipeRow.recipe_id,
                component_title: instruction.step_title,
            });

            for (const step of instruction.steps) {
                const stepRow = await insertData('component_steps', {
                    component_id: instructionRow.component_id,
                    step_number: step.step_number,
                    step_description: step.instruction,
                    step_notes: step.step_notes
                });

                for (const imageUrl of step.step_images) {
                    if (imageUrl) {
                        await insertData('component_step_images', {
                            step_id: stepRow.step_id,
                            image_url: imageUrl,
                        });
                    }
                }
            }
        }

        // Insert recipe_notes
        for (const note of recipe.recipe_notes) {
            await insertData('recipe_notes', {
                recipe_id: recipeRow.recipe_id,
                note_text: note,
            });
        }

        // Insert tags (allergy_type, cook_time_type, diet_type, dish_type, equipment_type, meal_type, protein_type)
        const tagCategories = [
            { table: 'allergy_types', column: 'allergy_type_name', values: recipe.tags.allergy_type },
            { table: 'cook_time_types', column: 'cook_time_type_name', values: recipe.tags.cook_time_type },
            { table: 'diet_types', column: 'diet_type_name', values: recipe.tags.diet_type },
            { table: 'dish_types', column: 'dish_type_name', values: recipe.tags.dish_type },
            { table: 'equipment_types', column: 'equipment_type_name', values: recipe.tags.equipment_type },
            { table: 'meal_types', column: 'meal_type_name', values: recipe.tags.meal_type },
            { table: 'protein_types', column: 'protein_type_name', values: recipe.tags.protein_type },
        ];

        for (const category of tagCategories) {
            // Skip if values are missing, null, or an empty array
            if (!category.values || category.values.length === 0) {
                console.log(`Skipping ${category.table}: No values provided.`);
                continue;
            }
            for (const value of category.values) {
                // Skip empty or null values
                if (!value) {
                    console.log(`Skipping empty value for ${category.table}.`);
                    continue;
                }
                const tagRow = await getOrInsertType(category.table, category.column, value);

                // Insert into the corresponding junction table
                const junctionTable = `recipe_${category.table.replace('_types', '_types')}`;
                const foreignKeyColumn = `${category.table.replace('_types', '_type')}_id`;
                await insertData(junctionTable, {
                    recipe_id: recipeRow.recipe_id,
                    [foreignKeyColumn]: tagRow[foreignKeyColumn],
                });
            }
        }


        console.log(`Inserted recipe: ${recipe.recipe_name}`);
    } catch (err) {
        console.error(`Error inserting recipe ${recipe.recipe_name}:`, err);
    }
}

// Main function to populate the database
async function populateDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');

        // Insert all recipes
        for (const recipe of recipeData.recipes) {
            await insertRecipe(recipe);
        }

        console.log('Database populated successfully!');
    } catch (err) {
        console.error('Error populating database:', err);
    } finally {
        await client.end();
        console.log('Disconnected from the database');
    }
}

// Run the script
populateDatabase();