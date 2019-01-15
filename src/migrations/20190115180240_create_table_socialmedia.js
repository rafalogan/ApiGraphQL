
exports.up = function(knex, Promise) {
  return knex.schema.createTable('socialmedia', table => {
      table.increments('id').primary();
      table.string('socialmedia').notNullable();
      table.string('icon', 80).notNullable();
      table.string('url').notNullable();
      table.timestamp('createdAt').notNullable();
      table.timestamp('updatedAt');
      table.integer('userUpdateId');
      table.integer('userId').references('id').inTable('users').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('socialmedia')
};
