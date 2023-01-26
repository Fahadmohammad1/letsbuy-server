const mongoose = require("mongoose");

const database = () => {
  const url = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.z0qvw8j.mongodb.net/test`;

  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data) => {
      console.log("connected");
    })
    .catch((e) => console.log(e));
};

module.exports = database;
