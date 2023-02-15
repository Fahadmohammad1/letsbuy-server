const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
  },
  email: {
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
  quantity: {
    type: Number,
  },
});

const cartModel = new mongoose.model("cart", cartSchema);

module.exports = cartModel;
