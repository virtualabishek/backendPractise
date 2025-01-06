import express from "express";
import mysql from "mysql2";

const app = express();
let connection;

app.use(express.json());

// insert user to the database.

app.post("/user/add", (req, res) => {
  const { username, location } = req.body;
  connection.query(
    `INSERT INTO users(username, location) VALUES('${username}', '${location}')`,
    (err, results, fields) => {
      if (err) throw err;
      console.log(results);
      if (results.affectedRows === 1)
        res.status(200).json({ success: true, messege: "user added." });
      else
        res.status(200).json({ success: false, messege: "unable to add user" });
    }
  );
});

//read user

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id) {
    connection.query(
      `SELECT * FROM users where id=${id}`,
      (err, results, fields) => {
        console.log(results);
        res.status(200).json(...results);
      }
    );
  } else
    res
      .status(200)
      .json({ success: false, message: "Sorry! User cannot be formed." });
});

//update user

app.put("/user/update/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id) {
    const { username, location } = req.body;
    connection.query(
      `UPDATE users SET username='${username}, location='${location}' WHERE id=${id}`,
      (err, results, fields) => {
        console.log(results);
      }
    );
    if (results.affectedRows === 1) {
      res
        .status(200)
        .json({ success: true, message: "Updated user succesfully" });
    }
  } else {
    res
      .status(200)
      .json({ success: false, message: "Sorry! User cannot be updated." });
  }
});

app.listen(8000, () => {
  console.log("Server is running well.");
  connection = mysql.createConnection({
    host: "localhost",
    user: "abi",
    password: "md@12345",
    database: "exampleDB",
  });
});
