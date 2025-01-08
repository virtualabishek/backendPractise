import express from "express";
// import connection from "../config/connection.js";

import UserController from "../controllers/user.contoller.js";
const router = express.Router();

const userController = new UserController();

// insert user into the database.

router.post("/add", userController.addUser);

//read a data from the db.
// read using ORM

router.get("/:id", userController.readUser);

// delete a data
router.delete("/delete/:id", userController.deleteUser);

// updating the user
router.put("/update/:id", userController.updateUser);

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

router.get("/search/by", userController.searchUser);

export default router;
