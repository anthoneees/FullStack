const mongoose = require("mongoose");

const TryoutSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  year: String,
  height: String,
  position: String,
  skill: String
});

const tryoutFormModel = mongoose.model("tryout", TryoutSchema);

module.exports = tryoutFormModel;
