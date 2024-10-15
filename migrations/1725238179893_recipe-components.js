/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('recipe_components', {
    component_id: 'id',
    recipe_id: {
      type: 'integer',
      notNull: true,
      references: '"recipes"',
      onDelete: 'CASCADE',
    },
    component_title: {
      type: 'varchar(255)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('recipe_components');
};
