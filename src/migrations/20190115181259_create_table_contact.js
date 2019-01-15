
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('subject', 1000).notNullable();
      table.integer('phone');
      table.timestamp('createdAt').notNullable();
      table.boolean('answer').notNullable().defaultTo(false);
      table.integer('userAnswerId').references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact')
};
