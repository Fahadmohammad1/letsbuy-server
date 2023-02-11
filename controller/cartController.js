const cartDB = require("../model/cart_model");

// post request functions
exports.addCartToDb = async (req, res, next) => {
  await cartDB.create(req.body);
  res.send({ success: true, message: "product added to Cart" });
};

// get request function
exports.getCart = async (req, res, next) => {
  const email = req.params.email;
  const items = await cartDB.find({ email: email });
  res.send(items);
};
