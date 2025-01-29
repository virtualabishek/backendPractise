import mysql from "mysql2";
import "dotenv";
const connection = mysql.connection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});
