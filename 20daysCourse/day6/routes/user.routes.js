import express from "express";
import connection from "./config/connection.js";

const router = express.Router();

// insert user to the database.

router.post("/add", (req, res) => {
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

router.get("/:id", (req, res) => {
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

router.put("/update/:id", (req, res) => {
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

// delete user

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    connection.query(
      `DELETE FROM users WHERE id=${id}`,
      (err, results, fields) => {
        console.log(results);
        if (results.affectedRows) {
          res
            .status(200)
            .json({ success: true, message: "User deleted succesfully" });
        } else {
          res
            .status(403)
            .json({ success: false, message: "User cannot deleted." });
        }
      }
    );
  } else {
    res.status(403).json({ success: false, message: "User Id not provided." });
  }
});

// prepare statement

router.post("/users/add", (req, res) => {
  const { id, username, location } = req.body;
  connection.query(
    `INSERT INTO users(id, username, location) VALUES(?, ?, ?)`,
    [id, username, location],
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

export default router;
