const { ObjectID } = require("bson");
const cartDB = require("../model/cart_model");

// post request functions
exports.addCartToDb = async (req, res, next) => {
  const id = req.body._id;
  console.log(id);
  const availableItem = await cartDB.findOne({ _id: ObjectID(id) });
  if (availableItem) {
    await cartDB.update({ _id: id }, { $set: { quantity: quantity + 1 } });
    return res.send({ success: true, message: "quantity increased" });
  }
  const data = await cartDB.update(
    { _id: id },
    { $set: { quantity: 1 } },
    { new: true }
  );
  res.send({ success: true, data: data, message: "product added to Cart" });
};

// get request function
exports.getCart = async (req, res, next) => {
  const email = req.params.email;
  const items = await cartDB.find({ email: email });
  res.send(items);
};
