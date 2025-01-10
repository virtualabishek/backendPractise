import express from "express";
import connection from "./models/index.js";
import bookRoutes from "./routes/bookRoutes.js";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is working well.");
});

app.use("/books", bookRoutes);

app.listen(process.env.PORT, async (req, res) => {
  console.log("Server has started.");
  try {
    await connection.authenticate();
    connection.sync();
    console.log("Succesfully connected to the database.");
  } catch (err) {
    console.log("Error during connection to the database.", err);
  }
});
