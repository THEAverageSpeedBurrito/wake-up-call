module.exports = {
  development: {
    client: 'pg',
    connection: 'postrges://localhost/wake-up-call'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
