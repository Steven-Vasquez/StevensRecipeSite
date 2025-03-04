/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('recipes', {
      recipe_id: 'id',
      recipe_name: { type: 'varchar(255)', notNull: true },
      recipe_slug: { type: 'varchar(255)', notNull: true, unique: true },
      star_rating: { type: 'decimal(2, 1)' },
      author_name: { type: 'varchar(255)' },
      credit_link: { type: 'varchar(255)' },
      recipe_description: { type: 'text' },
      recipe_image_url: { type: 'varchar(255)' },
      prep_time_mins: { type: 'integer' },
      total_time_mins: { type: 'integer' },
      servings: { type: 'varchar(10)' },
      notable_chef_id: {
        type: 'integer',
        references: 'notable_chefs',
        onDelete: 'SET NULL'
      },
      country_of_origin_id: {
        type: 'integer',
        references: 'country_of_origin',
        onDelete: 'SET NULL'
      },
      work_in_progress: { type: 'boolean', default: false },
    });
  };
  
  /**
   * @param pgm {import('node-pg-migrate').MigrationBuilder}
   * @returns {Promise<void> | void}
   */
  exports.down = (pgm) => {
    pgm.dropTable('recipes');
  };
  