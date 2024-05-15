const mongoose = require("mongoose");

const TryoutSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  year: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  height: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  position: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  skill: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

const Form = mongoose.model("Forms", TryoutSchema);

module.exports = Form;
