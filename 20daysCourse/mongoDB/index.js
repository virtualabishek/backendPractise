import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.listen(8000, async () => {
  console.log("Server has Started.");
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("Connected to DB.");
  } catch (err) {
    console.log(err);
  }
});
