
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', table => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('subtitle');
      table.string('description', 1000).notNullable();
      table.string('coverImg', 1000);
      table.string('cardImg', 1000);
      table.binary('content').notNullable();
      table.timestamp('createdAt').notNullable();
      table.integer('userId').references('id').inTable('users').notNullable();
      table.integer('categoryId').references('id').inTable('categories')
          .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles');
};
