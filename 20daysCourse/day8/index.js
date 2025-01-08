import express from "express";
import userRoute from "./route/user.route.js";
import connection from "./models/index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Backend is working.");
});

app.use("/users", userRoute);

app.listen(8000, async () => {
  console.log("Server has started.");
  try {
    await connection.authenticate();
    connection.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
