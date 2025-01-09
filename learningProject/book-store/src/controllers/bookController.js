import bookModel from "../models/bookModel.js";

export default class BooleanookController {
  async addBook(req, res, imageName) {
    const data = await bookModel.create({ ...req.body, image: imageName });
    console.log(data);
    if (data) {
      res.json(data);
    } else {
      res.json({ success: false, message: "Book cannot be added." });
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
      res.json({ success: false, message: "BOok Id cannot found" });
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
    const { id } = req.params;
    if (id) {
      const data = await bookModel.destroy({
        where: {
          id: id,
        },
      });
      console.log(data);
      data[1]
        ? res.json({ success: true, message: "Deleted" })
        : res.json({ success: false, message: "Book cannot Deleted" });
    } else {
      res.json({ success: false, message: "BOok ID not found" });
    }
  }
}
