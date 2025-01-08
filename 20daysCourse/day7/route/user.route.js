import express from "express";
import connection from "../config/connection.js";

const router = express.Router();

// insert user into the database.

router.post("/add", async (req, res) => {
  const { id, username, location } = req.body;
  try {
    const data = await connection.query(
      `INSERT INTO users (id, username, location) VALUES(?,?,?)`,
      [id, username, location]
    );
    console.log(data);
    console.log("Data sended.");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

//read a data from the db.

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      const [results] = await connection.query(
        `SELECT * FROM users WHERE id=?`,
        [id]
      );
      console.log(results);
      res.json(results);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Database query failed." });
    }
  } else {
    res
      .status(400)
      .json({ success: false, message: "User ID cannot be found." });
  }
});

// delete a data
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      connection.query(`DELETE FROM users WHERE id=?`, [id]);
      res.json({ success: true, message: "User deleted" });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.json({ success: false, message: "User ID cannot find. " });
  }
});

// updating the user
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      const { username, location } = req.body;
      const results = await connection.query(
        `UPDATE users SET username=?, location=? WHERE id=?`,
        [username, location, id]
      );
      console.log(results);
      if (results.affectedRows) {
        res.json({ success: true, message: "User Updated" });
      } else {
        res.json({ success: false, message: "Unable to update User" });
      }
    } catch (err) {
      console.log(err);
      res.json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.json({ success: false, message: "User Id cannot be found" });
  }
});

export default router;
