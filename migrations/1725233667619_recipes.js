/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('recipes', {
      recipe_id: 'id',
      recipe_name: { type: 'varchar(255)', notNull: true },
      star_rating: { type: 'decimal(2, 1)' },
      author_name: { type: 'varchar(255)' },
      description: { type: 'text' },
      recipe_image_url: { type: 'varchar(255)' },
      prep_time: { type: 'integer' },
      total_time: { type: 'integer' },
      servings: { type: 'varchar(10)' },
      notable_chef_id: {
        type: 'integer',
        references: 'notable_chefs',
        onDelete: 'SET NULL'
      }
    });
  };
  
  /**
   * @param pgm {import('node-pg-migrate').MigrationBuilder}
   * @returns {Promise<void> | void}
   */
  exports.down = (pgm) => {
    pgm.dropTable('recipes');
  };
  