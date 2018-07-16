// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///food-truck'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
