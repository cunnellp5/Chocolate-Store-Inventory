module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/chocolate_inventory'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  },
};
