/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('cook_time_types', {
        cook_time_type_id: {
            type: 'SERIAL',
            primaryKey: true,
        },
        cook_time_type_name: {
            type: 'VARCHAR(50)',
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
    pgm.dropTable('cook_time_types');
};