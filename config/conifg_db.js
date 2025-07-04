// config/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export default pool;
// This code sets up a MySQL connection pool using the mysql2 library and environment variables for configuration.
// The pool allows for efficient management of multiple database connections, improving performance for applications that require frequent