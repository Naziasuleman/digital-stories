const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const newuser = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: hash,
  });
  try {
    const data = await newuser.save();
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
