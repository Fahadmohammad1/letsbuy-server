const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
});

userSchema.methods.getToken = function () {
  return jwt.sign(
    {
      email: this.email,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "1h" }
  );
};

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;
