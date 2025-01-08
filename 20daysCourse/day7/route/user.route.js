import express from "express";
// import connection from "../config/connection.js";
import connection from "../models/index.js";
import userModel from "../models/user.model.js";
const router = express.Router();
import { Op } from "sequelize";

// insert user into the database.

router.post("/add", async (req, res) => {
  // const { username, location } = req.body;
  try {
    const data = await userModel.bulkCreate(req.body);
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

//read a data from the db.
// read using ORM

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const data = await userModel.findByPk(id);
    res.json(data);
    if (data) {
      res.json(data);
    } else {
      res
        .status(500)
        .json({ success: false, message: "Database query failed." });
    }

    // try {
    //   const [results] = await connection.query(
    //     `SELECT * FROM users WHERE id=?`,
    //     [id]
    //   );
    //     console.log(results);
    //     res.json(results);
    //   } catch (err) {
    //     console.log(err);
    //   res
    //     .status(500)
    //     .json({ success: false, message: "Database query failed." });
    // }
    // } else {
    //   res
    //     .status(400)
    //     .json({ success: false, message: "User ID cannot be found." });
  } else {
    res.status(500).json({ success: false, message: "Database query failed." });
  }
});

// delete a data
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const data = await userModel.destroy({
      where: {
        id,
      },
    });
    console.log(data);
    if (data) {
      res.json({ success: true, message: "User deleted" });
    } else {
      res.json({ success: false, message: "User cannot deleted" });
    }

    //   try {
    //     connection.query(`DELETE FROM users WHERE id=?`, [id]);
    //     res.json({ success: true, message: "User deleted" });
    //   } catch (err) {
    //     console.log(err);
    //   }
  } else {
    res.json({ success: false, message: "User ID cannot find. " });
  }
});

// updating the user
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const { username, location, description } = req.body;
    const data = await userModel.update(
      {
        username: username,
        location: location,
        description: description,
      },
      {
        where: {
          id: id,
        },
      }
    );
    console.log(data);
    if (data[0]) {
      res.json({ success: true, message: "User Updated" });
    } else {
      res.json({ success: false, message: "User Id cannot be found" });
    }
  }
});

// try {
//   const { username, location } = req.body;
//   const results = await connection.query(
//     `UPDATE users SET username=?, location=? WHERE id=?`,
//     [username, location, id]
//   );
//   console.log(results);
//   if (results.affectedRows) {
//     res.json({ success: true, message: "User Updated" });
//   } else {
//     res.json({ success: false, message: "Unable to update User" });
//   }
// } catch (err) {
//   console.log(err);
//   res.json({ success: false, message: "Internal Server Error" });
// }

router.get("/search/by", async (req, res) => {
  const { location } = req.body;
  const data = await userModel.findAll({
    where: {
      location: {
        [Op.like]: `%${location}%`,
      },
    },
  });
  console.log(data);
});

export default router;
