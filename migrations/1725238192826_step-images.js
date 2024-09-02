/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('step_images', {
    step_id: {
      type: 'integer',
      notNull: true,
      references: '"steps"',
      onDelete: 'CASCADE',
    },
    image_id: {
      type: 'integer',
      notNull: true,
      references: '"images"',
      onDelete: 'CASCADE',
    },
  });

  pgm.addConstraint('step_images', 'pk_step_images', {
    primaryKey: ['step_id', 'image_id'],
  });
};

exports.down = (pgm) => {
  pgm.dropTable('step_images');
};
