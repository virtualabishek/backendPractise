import express from "express";
import userRoute from "./route/user.route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Backend is working.");
});

app.use("/users", userRoute);

app.listen(8000, async () => {
  console.log("Server has started.");
});
