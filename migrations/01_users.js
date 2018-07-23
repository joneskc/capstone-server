
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
      table.increments().primary()
      table.text('name')
      table.text('username')
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users')
};
