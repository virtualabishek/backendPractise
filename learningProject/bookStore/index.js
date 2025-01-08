import express from "express";
import bookRoutes from "./routes/book.route.js";
import connection from "./models/index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working well...");
});
app.use("/books", bookRoutes);

app.listen(8000, async () => {
  console.log("Server is running on port number: 8000");
  try {
    await connection.authenticate();
    await connection.sync();
    console.log("Connection started successfully.");
  } catch (err) {
    console.error("Database connection or sync failed:", err);
  }
});
