import express from "express";
import dbController from " ../db/db-controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("School Route Pages.");
});

router.post("/add", dbController.addSchool);

export default router;
