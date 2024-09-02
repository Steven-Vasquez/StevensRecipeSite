/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('recipe_protein_types', {
      recipe_id: {
        type: 'integer',
        references: 'recipes',
        onDelete: 'CASCADE',
        notNull: true
      },
      protein_type_id: {
        type: 'integer',
        references: 'protein_types',
        onDelete: 'CASCADE',
        notNull: true
      }
    });
    pgm.addConstraint('recipe_protein_types', 'unique_recipe_protein_type', {
      unique: ['recipe_id', 'protein_type_id']
    });
  };
  
  /**
   * @param pgm {import('node-pg-migrate').MigrationBuilder}
   * @returns {Promise<void> | void}
   */
  exports.down = (pgm) => {
    pgm.dropTable('recipe_protein_types');
  };
  