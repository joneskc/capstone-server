
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trucks', (table) => {
      table.increments().primary()
      table.string('name')
      table.string('username')
      table.string('category')
      table.object('location')
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('trucks')
};
