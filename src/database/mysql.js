require('dotenv').config()

let config = {
    client: 'mysql2',
    host:   process.env.MYSQL_HOST,     
    user:   process.env.MYSQL_USER,
    database:   process.env.MYSQL_DB,
    password:   process.env.MYSQL_PASS
}

module.exports = require('knex')(config)