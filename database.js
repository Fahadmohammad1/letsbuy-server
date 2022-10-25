const mongoose = require("mongoose");

const database = () => {
  const url = "mongodb://localhost:27017/letsbuy-ecommerce";

  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data) => {
      console.log("connected");
    })
    .catch((e) => console.log(e));
};

module.exports = database;
