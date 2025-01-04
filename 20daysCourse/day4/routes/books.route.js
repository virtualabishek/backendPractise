import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  // do function here and send data.
  // like db works
  // auntentication.
  res.status(200).send({ name: "Abi", year: 2060 });
});

router.get("/submit", (req, res) => {
  res.status(200).send(true);
});

router.get("/add/:id/:settings/:author", (req, res) => {
  console.log(req.params);
  res.status(200).send("Book Added. ");
});

// just using json format in order to provide a answer.

router.get("/read/pdf", (req, res) => {
  res.status(200).json({ added: "true" });
  //quaries
  const { name, id, author } = req.query;
  console.log(name, id, author);
});

router.get("/pay", (req, res) => {
  res.status(403).send("Error on loading.");
});

export default router;

// in post method we use body.

//new topic:
/*

API: establish communication between two system...
This above things are REST API.

Types: db api, os api, web api. 


WEB API:


*/
