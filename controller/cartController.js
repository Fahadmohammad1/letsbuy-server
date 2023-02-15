const { default: mongoose } = require("mongoose");
const cartDB = require("../model/cart_model");

// post request functions
exports.addCartToDb = async (req, res, next) => {
  const id = req.body._id;
  const email = req.params.email;
  const filter = { email: email, _id: id };
  const availableItem = await cartDB.findOne(filter);

  if (availableItem) {
    const options = { upsert: true };
    const update = { quantity: availableItem.quantity + 1 };
    await cartDB.updateOne(filter, update, options);
    return res.send({ success: false, message: "quantity increased" });
  }

  delete req.body._id;
  await cartDB.create({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
    quantity: 1,
  });
  res.send({ success: true, message: "Item added to cart" });
};

// get request function
exports.getCart = async (req, res, next) => {
  const email = req.params.email;
  const items = await cartDB.find({ email: email });
  res.send(items);
};
