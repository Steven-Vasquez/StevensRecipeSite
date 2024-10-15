/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('component_step_images', {
    image_id: 'id',
    step_id: {
      type: 'integer',
      notNull: true,
      references: '"component_steps"',
      onDelete: 'CASCADE',
    },
    image_url: {
      type: 'varchar(255)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('component_step_images');
};
