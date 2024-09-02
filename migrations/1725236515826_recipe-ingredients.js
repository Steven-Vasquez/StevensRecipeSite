/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('recipe_ingredients', {
      recipe_id: {
        type: 'integer',
        references: 'recipes',
        onDelete: 'CASCADE',
        notNull: true
      },
      ingredient_id: {
        type: 'integer',
        references: 'ingredients',
        onDelete: 'CASCADE',
        notNull: true
      },
      quantity: { type: 'varchar(50)' } // Example: "2 cups", "1 tbsp", etc.
    });
    pgm.addConstraint('recipe_ingredients', 'unique_recipe_ingredient', {
      unique: ['recipe_id', 'ingredient_id']
    });
  };
  
  /**
   * @param pgm {import('node-pg-migrate').MigrationBuilder}
   * @returns {Promise<void> | void}
   */
  exports.down = (pgm) => {
    pgm.dropTable('recipe_ingredients');
  };
  