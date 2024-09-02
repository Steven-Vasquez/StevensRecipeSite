/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('steps', {
    step_id: 'id',
    recipe_id: {
      type: 'integer',
      notNull: true,
      references: '"recipes"',
      onDelete: 'CASCADE',
    },
    step_number: {
      type: 'integer',
      notNull: true,
    },
    step_description: {
      type: 'text',
      notNull: true,
    },
  });

  // Ensure that each recipe has unique step numbers
  pgm.addConstraint('steps', 'unique_recipe_step_number', {
    unique: ['recipe_id', 'step_number'],
  });
};

exports.down = (pgm) => {
  pgm.dropTable('steps');
};
