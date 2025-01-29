import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("School Route Pages.");
});

export default router;
