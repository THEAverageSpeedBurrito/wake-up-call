
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('new blog post');
    table.text('body').notNullable().defaultTo('');
    table.string('img').defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog');
};
