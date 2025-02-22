/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('meal_types', {
        meal_type_id: {
            type: 'SERIAL',
            primaryKey: true,
        },
        meal_type_name: {
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
    pgm.dropTable('meal_types');
};