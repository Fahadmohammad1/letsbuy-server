const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: [true, "Please Enter userId"],
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
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
