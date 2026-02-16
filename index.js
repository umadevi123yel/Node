const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
// const dbConnection = "mongodb://127.0.0.1:27017/mydatabase";
// const port = 5000;
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected nn"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(process.env.port, () => {
  console.log(`Server running on port ${process.env.port}`);
});
