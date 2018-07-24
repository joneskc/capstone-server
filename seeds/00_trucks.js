
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert(
        [{
          id: 1000001,
          name: 'Barbed Wire Reef',
          username: 'Barbedwire',
          category: 'Tacos',
          latitude: 39.758683,
          longitude: -105.007537
        },{
          id: 1000002,
          name: 'Rolling Italian',
          username: 'Italian',
          category: 'Italian',
          latitude: 39.758683,
          longitude: -105.007537
        },{
          id: 1000003,
          name: 'Basic Kneads Pizza',
          username: 'Basickneads',
          category: 'Pizza',
          latitude: 39.758683,
          longitude: -105.007537
        },{
          id: 1000004,
          name: 'Burger Chief',
          username: 'Burger',
          category: 'Burgers',
          latitude: 39.758683,
          longitude: -105.007537
        }
        ]);
    });
};
