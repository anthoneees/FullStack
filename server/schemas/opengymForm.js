const mongoose = require("mongoose");

const OpenGymSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  year: String,
  height: String,
  position: String,
  skill: String
});

const openFormModel = mongoose.model("opengym", OpenGymSchema);

module.exports = openFormModel;
