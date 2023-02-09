const cartDB = require("../model/cart_model");

// post request functions
exports.addCartToDb = async (req, res, next) => {
  const data = await cartDB.create(req.body);
  return res.send(data);
};
