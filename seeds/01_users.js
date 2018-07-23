
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(
        [{
          id: 1000001,
          name: 'Travis',
          username: 'trav'
        },{
          id: 1000002,
          name: 'Travis',
          username: 'trav'
        },{
          id: 1000003,
          name: 'Travis',
          username: 'trav'
        }]
      );
    });
};
