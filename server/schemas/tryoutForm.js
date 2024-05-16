const mongoose = require("mongoose");

const TryoutSchema = new mongoose.Schema({
  name: String,
  email: String,
  year: String,
  height: String,
  position: String,
  skill: String
});

const formModel = mongoose.model("forms", TryoutSchema);

module.exports = formModel;
