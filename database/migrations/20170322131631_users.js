
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.integer('zip').notNullable().defaultTo(80302);
    table.text('bio').defaultTo('');
    table.string('email').notNullable();
    table.string('phone').notNullable().defaultTo('');
    table.boolean('admin').notNullable().defaultTo(false);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
