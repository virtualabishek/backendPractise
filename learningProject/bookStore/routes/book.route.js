import express from "express";
import connection from "../models/index.js";
import bookModel from "../models/book.model.js";
import { Op } from "sequelize";
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

// read a data from a db
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const data = await bookModel.destroy({
        where: { id },
      });
      console.log(data);
      if (data) {
        res.json({ sucess: true, message: "Book is deleted from the db." });
      } else {
        res.status(302).json({ sucess: false, message: "Book can't deleted." });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// read a book from database
router.get("/read/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const data = await bookModel.findByPk(id);
    res.json(data);
    console.log(data);
    if (data) {
      res.json(data);
    } else {
      res.status(503).json({ sucess: false, message: "Book Id is not on db." });
    }
  }
});

// search by the pages
router.get("/search/by", async (req, res) => {
  const { totalPages } = req.query;
  const data = await bookModel.findAll({
    where: {
      totalPages: {
        [Op.like]: `${totalPages}`,
      },
    },
  });
  console.log(data);
  if (data) {
    res.json(data);
  } else {
    res.json({
      success: false,
      message: "Sorry! Book is not found on the database.",
    });
  }
});

export default router;
