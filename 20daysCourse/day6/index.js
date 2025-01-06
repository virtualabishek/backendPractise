import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.status(200).send("Backend is working!");
});

server.listen(8000, () => {
  console.log("Server is running well.");
});
    