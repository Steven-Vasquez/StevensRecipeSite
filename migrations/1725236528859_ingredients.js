/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('ingredients', {
    component_id: {
      type: 'integer',
      notNull: true,
      references: '"ingredient_components"',
      onDelete: 'CASCADE',
    },
    ingredient_text: {
      type: 'varchar(255)',
      notNull: true,
    },
    quantity: {
      type: 'varchar(50)',
      notNull: true,
    },
  });

  // Add an index on component_id for faster lookups
  pgm.createIndex('ingredients', 'component_id');
};

exports.down = (pgm) => {
  pgm.dropTable('ingredients');
};
