const mongoose = require("mongoose");
const userschema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("user", userschema);
