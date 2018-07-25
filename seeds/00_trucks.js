
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
          open: false,
          latitude: 39.758655,
          longitude: -105.007440
        },{
          id: 1000002,
          name: 'Rolling Italian',
          username: 'Italian',
          category: 'Italian',
          open: false,
          latitude: 39.758837,
          longitude: -105.006356
        },{
          id: 1000003,
          name: 'Basic Kneads Pizza',
          username: 'Basickneads',
          category: 'Pizza',
          open: false,
          latitude: 39.760379,
          longitude: -105.011399
        },{
          id: 1000004,
          name: 'Burger Chief',
          username: 'Burger',
          category: 'Burgers',
          open: false,
          latitude: 39.759191,
          longitude: -105.002859
        },{
          id: 1000005,
          name: 'The Biscuit Bus',
          username: 'Biscuit',
          category: 'Biscuits',
          open: true,
          latitude: 39.752448,
          longitude: -105.014266
        },{
          id: 1000006,
          name: 'Still Smokin',
          username: 'Smokin',
          category: 'BBQ',
          open: true,
          latitude: 39.761527,
          longitude: -105.010076
        },{
          id: 1000007,
          name: 'Hey PB&J',
          username: 'PB',
          category: 'Sandwiches',
          open: true,
          latitude: 39.752340,
          longitude: -105.009064
        },{
          id: 1000008,
          name: 'Ragin Cajun BBQ',
          username: 'Cajun',
          category: 'BBQ',
          open: true,
          latitude: 39.754004,
          longitude: -104.994779
        }
        ]);
    });
};
