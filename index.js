const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);
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
  res.send("Hello from Express! azure");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
