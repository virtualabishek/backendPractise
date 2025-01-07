import express from "express";
import bookRouter from "./route/book.route.js";
const app = express();
app.use(express.json());    

app.use("/book", bookRouter);

app.listen(8000, () => {
  console.log("Server is started.");
});
