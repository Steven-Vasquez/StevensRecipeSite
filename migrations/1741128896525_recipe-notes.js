/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('recipe_notes', {
    note_id: {
      type: 'serial',
      primaryKey: true,
    },
    recipe_id: {
      type: 'integer',
      notNull: true,
      references: '"recipes"',
      onDelete: 'CASCADE',
    },
    note_text: {
      type: 'text',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('recipe_notes');
};
