/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('recipe_equipment_types', {
      recipe_id: {
        type: 'integer',
        references: 'recipes',
        onDelete: 'CASCADE',
        notNull: true
      },
      equipment_type_id: {
        type: 'integer',
        references: 'equipment_types',
        onDelete: 'CASCADE',
        notNull: true
      }
    });
    pgm.addConstraint('recipe_equipment_types', 'unique_recipe_equipment_type', {
      unique: ['recipe_id', 'equipment_type_id']
    });
  };
  
  /**
   * @param pgm {import('node-pg-migrate').MigrationBuilder}
   * @returns {Promise<void> | void}
   */
  exports.down = (pgm) => {
    pgm.dropTable('recipe_equipment_types');
  };
  