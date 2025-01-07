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
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

export default router;
