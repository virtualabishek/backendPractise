import express from "express";
import schoolRoutes from "./routes/school-routes.js";

const app = express();

app.use("/", (req, res) => {
  res.status("Backend is running well.");
});

app.get("/school", schoolRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
