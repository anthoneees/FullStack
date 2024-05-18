const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const formsrouter  = require("./routes/forms.js");
const googlerouter = require("./routes/google.js")
const instaFeedrouter = require("./routes/instaFeed.js")
const dotenv = require('dotenv')

const app = express();
app.use(express.json());
app.use(cors());
app.use(formsrouter);
app.use(googlerouter);
app.use(instaFeedrouter)

dotenv.config()


const PORT = process.env.PORT || 3000;
const connectMongo = process.env.MONGOPASS;

mongoose
  .connect(connectMongo)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error: ${err}`));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});



