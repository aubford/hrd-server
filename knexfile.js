require('dotenv').load()
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/hrd',
    seeds: {directory: './seeds'}
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    seeds: {directory: './seeds'}
  }

}
