
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tweets', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index();
    table.string('title').notNullable().defaultTo('New Tweet');
    table.text('body').notNullable().defaultTo('');
    table.integer('votes').defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tweets');
};
