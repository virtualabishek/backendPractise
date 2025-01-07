import express from "express";
import connection from "../config/book.connection.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  const { bookname, publishdate, authorname } = req.body;
  try {
    const data = await connection.query(
      `INSERT INTO bookTable(bookname, publishdate, authorname) VALUES(?, ?, ?)`,
      [bookname, publishdate, authorname]
    );
    console.log(data);
    return res
      .status(200)
      .json({ success: true, message: "Book added successfully." });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while adding the book.",
      });
  }
});

export default router;
