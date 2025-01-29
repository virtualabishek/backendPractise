import express from "express";
import schoolRoutes from "./routes/school-routes.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Backend is running well.");
});

app.use("/school", schoolRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
