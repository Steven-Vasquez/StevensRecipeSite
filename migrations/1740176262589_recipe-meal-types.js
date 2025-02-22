/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('recipe_meal_types', {
        recipe_id: {
            type: 'integer',
            references: 'recipes',
            onDelete: 'CASCADE',
            notNull: true,
        },
        meal_type_id: {
            type: 'integer',
            references: 'meal_types',
            onDelete: 'CASCADE',
            notNull: true,
        },
    });

    // Add a unique constraint to prevent duplicate entries
    pgm.addConstraint('recipe_meal_types', 'unique_recipe_meal_type', {
        unique: ['recipe_id', 'meal_type_id'],
    });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
    pgm.dropTable('recipe_meal_types');
};