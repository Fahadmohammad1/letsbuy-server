const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const cartModel = new mongoose.model("cart", cartSchema);

module.exports = cartModel;
