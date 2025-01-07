import express from "express";

import userRouter from "./routes/user.routes.js";
const app = express();
let connection;

app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("Server is running well.");
  
});
