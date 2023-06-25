const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");

dotenv.config();
const uri = process.env.DATABASE_CONN;
mongoose.connect(uri, { useNewUrlParser: true });
var corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json

app.use(bodyparser.json());
app.use("/", userRoutes);
app.listen(5000, () => {
  console.log("Assalam o alailkum");
});
