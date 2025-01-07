import mysql from "mysql2";

connection = mysql.createConnection({
  host: "localhost",
  user: "abi",
  password: "md@12345",
  database: "exampleDB",
});

export default connection;
