/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('recipe_allergy_types', {
      recipe_id: {
        type: 'integer',
        references: 'recipes',
        onDelete: 'CASCADE',
        notNull: true
      },
      allergy_type_id: {
        type: 'integer',
        references: 'allergy_types',
        onDelete: 'CASCADE',
        notNull: true
      }
    });
    pgm.addConstraint('recipe_allergy_types', 'unique_recipe_allergy_type', {
      unique: ['recipe_id', 'allergy_type_id']
    });
  };
  
  /**
   * @param pgm {import('node-pg-migrate').MigrationBuilder}
   * @returns {Promise<void> | void}
   */
  exports.down = (pgm) => {
    pgm.dropTable('recipe_allergies_types');
  };
  