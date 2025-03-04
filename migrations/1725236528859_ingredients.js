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
    quantity: {
      type: 'varchar(50)',
      notNull: true,
    },
    ingredient_text: {
      type: 'text',
      notNull: true,
    },
    ingredient_notes: {
      type: 'text',
    },
  });

  // Add an index on component_id for faster lookups
  pgm.createIndex('ingredients', 'component_id');
};

exports.down = (pgm) => {
  pgm.dropTable('ingredients');
};
