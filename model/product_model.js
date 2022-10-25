const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

const productModel = new mongoose.model("product", productSchema);

module.exports = productModel;
