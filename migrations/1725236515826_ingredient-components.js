/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('ingredient_components', {
    component_id: {
      type: 'serial',
      primaryKey: true,
    },
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
  pgm.dropTable('ingredient_components');
};
