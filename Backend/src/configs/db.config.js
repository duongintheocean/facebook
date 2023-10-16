require('dotenv').config()
const knexConfig = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3307,
      user: 'root',
      password: 'duong15032001',
      database: 'facebook_ojt',
    },
    pool: { min: 0, max: 10 },
    useNullAsDefault: true,
  },
}

module.exports = {
  knexConfig,
}
