
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trucks', (table) => {
      table.increments().primary()
      table.text('name')
      table.text('username')
      table.text('category')
      table.float('latitude')
      table.float('longitude')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('trucks')
};
