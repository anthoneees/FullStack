const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const formsrouter = require("./routes/forms.js");
const googlerouter = require("./routes/google.js");
//const instaFeedrouter = require("./routes/instaFeed.js"); -- depreciated

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use(
  express.static(path.join(__dirname, "../client/dist"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

app.use(formsrouter);
app.use(googlerouter);
//app.use(instaFeedrouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
const connectMongo = process.env.MONGOPASS;

mongoose
  .connect(connectMongo)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error: ${err}`));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
