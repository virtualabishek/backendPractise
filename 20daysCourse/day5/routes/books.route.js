import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Router is running well.");
});

router.get("/delete", (req, res) => {
  res.status(200).send({ delete: true });
});

router.get("/submit", (req, res) => {
  res.status(200).send(true);
});

router.post("/add", (req, res) => {
  res.status(200).send({ added: true });
});

router.get("/update/:id/:settings/:author", (req, res) => {
  console.log(req.params);
  res.status(200).send("Book Added.");
});

// just using json format in order to provide an answer.
router.get("/read/pdf", (req, res) => {
  const { name, id, author } = req.query;
  console.log(name, id, author);
  res.status(200).json({ added: "true" });
});

router.get("/pay", (req, res) => {
  res.status(403).send("Error on loading.");
});

export default router;
