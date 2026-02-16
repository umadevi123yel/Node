const express = require("express");
const router = express.Router();
const User = require("../models/users");
//create
router.post("/createUser", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
//get
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
//update
router.put("/update", async (req, res) => {
  const { email, updateData } = req.body;

  const user = await User.findOneAndUpdate({ email }, updateData, {
    new: true,
  });

  res.json(user);
});
//delete
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  res.json(user);
});
module.exports = router;
