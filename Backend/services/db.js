require('dotenv').config()

var { Pool } = require('pg');
var isProduction = process.env.NODE_ENV === 'production';

//var connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
var connectionString = 'postgres://zgqmtjki:qkswMe4j2_OguAffRZ9aOxfYRw52hxc8@salt.db.elephantsql.com:5432/zgqmtjki';
var pool = new Pool({
    connectionString: connectionString,
    ssl: isProduction
});

module.exports = { pool }