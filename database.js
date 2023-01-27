const mongoose = require("mongoose");

const database = async () => {
  const url = "mongodb://127.0.0.1:27017/test";

  await mongoose
    .connect(url)
    .then((data) => {
      console.log(data, "connected");
    })
    .catch((e) => console.log(e));
};

module.exports = database;
