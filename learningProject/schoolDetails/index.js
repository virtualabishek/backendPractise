import express from "express";
import schoolRoutes from "./routes/school-routes.js";
import connection from "./db/db-connection.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Backend is running well.");
});

app.use("/school", schoolRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 8000.");
  if (connection) {
    console.log("Connected to the database.");
  } else {
    console.log("Cannot Connect To The Database.");
  }
});
