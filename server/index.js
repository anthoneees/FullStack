const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const { formsrouter } = require("./routes/forms.js");
const { googlerouter } = require("./routes/google.js")

const app = express();
app.use(express.json());
app.use(cors());
app.use(formsrouter);
app.use(googlerouter);


const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://0.0.0.0:27017/Volleyball")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error: ${err}`));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});



