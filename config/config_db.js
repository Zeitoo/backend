// config/db.js
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

module.exports = { pool };

// This code sets up a MySQL connection pool using the mysql2 library and environment variables for configuration.
// The pool allows for efficient management of multiple database connections, improving performance for applications that require frequent