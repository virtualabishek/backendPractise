import { json } from "sequelize";
import bookModel from "../models/bookModel.js";
import { Op } from "sequelize";
import textConstant from "../constants/textConstant.js";
import urlConstant from "../constants/urlConstant.js";

export default class BookController {
  async addBook(req, res, imageName) {
    try {
      const data = await bookModel.create({ ...req.body, image: imageName });
      console.log(data);
      if (data) {
        res.json(data);
      } else {
        res.json({ success: false, message: "Book cannot be added." });
      }
    } catch (err) {
      return res.json({
        success: false,
        message: "Error while quering the database",
      });
    }
  }

  async getBookById(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await bookModel.findByPk(id);
      console.log(data);
      if (data) {
        res.json(data);
      } else res.json([]);
    } else {
      res.json({ success: false, message: textConstant.BOOK_ID_NOT_PROVIDED });
    }
  }
  async updateBook(req, res) {
    const { id } = req.params;
    if (id) {
      req.body;
      const data = await bookModel.update(req.body, {
        where: {
          id: id,
        },
      });
      console.log(data);
      data[1]
        ? res.json({ success: true, message: "Updated" })
        : res.json({ success: false, message: "Failed to update" });
    } else {
      res.json({ success: false, message: "BOok cannot update" });
    }
  }
  async deleteBook(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.json({
          success: false,
          message: textConstant.BOOK_ID_NOT_PROVIDED,
        });
      }

      const data = await bookModel.destroy({
        where: { id: id },
      });

      if (data > 0) {
        res.json({ success: true, message: "Deleted" });
      } else {
        res.json({
          success: false,
          message: "Book cannot be deleted. Book not found.",
        });
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      res.status(500).json({
        success: false,
        message: "Error occurred while deleting the book",
      });
    }
  }

  async searchBook(req, res) {
    const { q } = req.query;

    if (q) {
      const data = await bookModel.findAll({
        where: {
          [Op.or]: {
            name: {
              [Op.like]: `%${q}%`,
            },
            author: {
              [Op.like]: `%${q}%`,
            },
          },
        },
        raw: true,
      });

      console.log(data);
      for (let d of data) {
        d.image = urlConstant.IMG_PATH_URL + d.image;
        console.log(d.image);
      }
      res.json(data);
    } else res.json({ success: false, message: "Empty Query Search string." });
  }

  async getBooks(req, res) {
    let { limit } = req.query;
    if (!limit) limit = 20;
    try {
      const data = await bookModel.findAll({
        limit: parseInt(limit),
        raw: true,
      });
      console.log(data);
      for (let d of data) {
        d.image = urlConstant.IMG_PATH_URL + d.image;
        console.log(d.image);
      }
      res.json(data);
    } catch (err) {
      res.json({ success: false, message: err });
    }
  }
}
