
exports.up = function(knex, Promise) {
  return knex.schema.createTable('journals', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('New Journal');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index();
    table.text('body').notNullable().defaultTo('');
    table.boolean('public').defaultTo(false);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('journals');
};
