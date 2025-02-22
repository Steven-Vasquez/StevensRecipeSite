/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable('notable_chefs', {
    chef_id: {
      type: 'SERIAL',
      primaryKey: true,
    },
    chef_name: {
      type: 'VARCHAR(255)',
      notNull: true,
      unique: true,
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable('notable_chefs');
};