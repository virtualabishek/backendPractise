import express, { Router } from "express";
import bookModel from "../models/bookModel.js";
import { json } from "sequelize";
import multer from "multer";
import BookController from "../controllers/bookController.js";

const router = express.Router();
let imageName;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    imageName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname.trim();
    cb(null, imageName);
  },
});

const bookController = new BookController();
const upload = multer({ storage: storage });
//adding book
router.post("/add", upload.single("image"), (req, res) => {
  bookController.addBook(req, res, imageName);
});

// Routes
router.get("/:id", bookController.getBookById);

//list books with limit=20
router.get("/", bookController.getBooks);

router.put("/update/:id", bookController.updateBook);

router.delete("/delete/:id", bookController.deleteBook);

router.get("/search/all", bookController.searchBook);

export default router;
