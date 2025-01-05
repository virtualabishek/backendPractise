import express from "express";
import bookRouter from "./routes/books.route.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Backend is working fine.");
});

app.use("/books", bookRouter);

app.listen(8000, () => {
  console.log("Server is running fine....");
});
