import express from "express";
import bookRouter from "./routes/books.route.js";
import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.use(limiter);

const app = express();

// just to tell that these are not routers.

app.use(express.static("public"));

// app.use(express.json);

// app.use(express.urlencoded({ extended: true }));

//This is middleware...
app.use((req, res, next) => {
  console.log("Hello");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Backend is working fine.");
});

app.use("/books", bookRouter);

app.listen(8000, () => {
  console.log("Server is running fine....");
});
