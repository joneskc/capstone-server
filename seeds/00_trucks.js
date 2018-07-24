
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
          open: true,
          latitude: 39.758683,
          longitude: -105.007537
        },{
          id: 1000002,
          name: 'Rolling Italian',
          username: 'Italian',
          category: 'Italian',
          open: true,
          latitude: 39.758837,
          longitude: -105.006356
        },{
          id: 1000003,
          name: 'Basic Kneads Pizza',
          username: 'Basickneads',
          category: 'Pizza',
          open: true,
          latitude: 39.760379,
          longitude: -105.011399
        },{
          id: 1000004,
          name: 'Burger Chief',
          username: 'Burger',
          category: 'Burgers',
          open: true,
          latitude: 39.759191,
          longitude: -105.002859
        }
        ]);
    });
};
