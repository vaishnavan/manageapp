const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(require("./controller/moneyControl"));
app.use(require("./controller/monthControl"));

app.listen(process.env.PORT || 5000, () => {
  console.log("server connected");
});

mongoose.connect(
  process.env.MONGO_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("database connected");
    } else {
      console.log(err);
    }
  }
);
