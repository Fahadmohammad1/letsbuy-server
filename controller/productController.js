const ProductDB = require("../model/product_model");

exports.addProduct = async (req, res, next) => {
  await ProductDB.create(req.body);
  res.send({ success: true, message: "product added successfully" });
};
exports.getProduct = async (req, res, next) => {
  const products = await ProductDB.find({});
  res.send(products);
};
