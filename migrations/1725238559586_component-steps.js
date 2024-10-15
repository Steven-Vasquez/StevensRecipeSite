/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('component_steps', {
    step_id: 'id',
    component_id: {
      type: 'integer',
      notNull: true,
      references: '"recipe_components"',
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

  // Ensure unique step numbers within each component
  pgm.addConstraint('component_steps', 'unique_component_step_number', {
    unique: ['component_id', 'step_number'],
  });
};

exports.down = (pgm) => {
  pgm.dropTable('component_steps');
};