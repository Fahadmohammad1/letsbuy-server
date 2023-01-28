const UserDB = require("../model/product_model");

//get
exports.getUser = async (req, res, next) => {
  const users = await UserDB.find({});
  res.send(users);
};

//post
exports.addUser = async (req, res, next) => {
  await UserDB.create(req.body);
  res.send({ success: true, message: "product added successfully" });
};
