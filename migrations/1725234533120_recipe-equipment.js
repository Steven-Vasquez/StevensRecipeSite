/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('recipe_equipment', {
      recipe_id: {
        type: 'integer',
        references: 'recipes',
        onDelete: 'CASCADE',
        notNull: true
      },
      equipment_id: {
        type: 'integer',
        references: 'equipment',
        onDelete: 'CASCADE',
        notNull: true
      }
    });
    pgm.addConstraint('recipe_equipment', 'unique_recipe_equipment', {
      unique: ['recipe_id', 'equipment_id']
    });
  };
  
  /**
   * @param pgm {import('node-pg-migrate').MigrationBuilder}
   * @returns {Promise<void> | void}
   */
  exports.down = (pgm) => {
    pgm.dropTable('recipe_equipment');
  };
  