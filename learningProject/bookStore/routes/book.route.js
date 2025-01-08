import express from "express";
import connection from "../models/index.js";
import bookModel from "../models/book.model.js";
const router = express.Router();

//CRAUD Operation
// Create
// add user.

router.post("/add", async (req, res) => {
  //   const { bookTitle, authorName, totalPages } = req.body;
  //  yo garna jhau lagyo vane, bulk create method use garyo vane hunxa.
  try {
    const data = await bookModel.bulkCreate(req.body);
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res
      .status(503)
      .json({ sucess: false, message: "Sorry! Something went wrong." });
  }
});

export default router;
