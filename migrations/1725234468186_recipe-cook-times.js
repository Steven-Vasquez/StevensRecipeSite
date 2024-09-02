/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('recipe_cook_times', {
      recipe_id: {
        type: 'integer',
        references: 'recipes',
        onDelete: 'CASCADE',
        notNull: true
      },
      cook_time_id: {
        type: 'integer',
        references: 'cook_times',
        onDelete: 'CASCADE',
        notNull: true
      }
    });
    pgm.addConstraint('recipe_cook_times', 'unique_recipe_cook_time', {
      unique: ['recipe_id', 'cook_time_id']
    });
  };
  
  /**
   * @param pgm {import('node-pg-migrate').MigrationBuilder}
   * @returns {Promise<void> | void}
   */
  exports.down = (pgm) => {
    pgm.dropTable('recipe_cook_times');
  };
  