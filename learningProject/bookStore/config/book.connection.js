import mysql from "mysql2/promise";

export default await mysql.createConnection({
  host: "localhost",
  user: "abi",
  password: "md@12345",
  database: "exampleDB",
});
