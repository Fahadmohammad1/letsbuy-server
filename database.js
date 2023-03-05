const mongoose = require("mongoose");

const database = async () => {
  const url = `mongodb+srv://letsbuyUser:${process.env.PASS}@cluster0.z0qvw8j.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(url)
    .then((data) => {
      console.log("connected");
    })
    .catch((e) => console.log(e));
};

module.exports = database;
