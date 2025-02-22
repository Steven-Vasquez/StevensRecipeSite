/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('recipe_cook_time_types', {
        recipe_id: {
            type: 'integer',
            references: 'recipes',
            onDelete: 'CASCADE',
            notNull: true,
        },
        cook_time_type_id: {
            type: 'integer',
            references: 'cook_time_types',
            onDelete: 'CASCADE',
            notNull: true,
        },
    });

    // Add a unique constraint to prevent duplicate entries
    pgm.addConstraint('recipe_cook_time_types', 'unique_recipe_cook_time', {
        unique: ['recipe_id', 'cook_time_type_id'],
    });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
    pgm.dropTable('recipe_cook_time_types');
};