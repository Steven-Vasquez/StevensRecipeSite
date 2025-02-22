/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('country_of_origin', {
        country_id: {
            type: 'SERIAL',
            primaryKey: true,
        },
        country_name: {
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
    pgm.dropTable('country_of_origin');
};