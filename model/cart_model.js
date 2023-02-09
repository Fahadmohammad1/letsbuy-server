const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
});

const cartModel = new mongoose.model("cart", cartSchema);

module.exports = cartModel;
