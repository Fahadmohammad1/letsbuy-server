const cartDB = require("../model/cart_model");

// post request functions
exports.addCartToDb = async (req, res, next) => {
  await cartDB.create(req.body);
  res.send({ success: true, message: "product added to Cart" });
};
