const cartDB = require("../model/cart_model");

// post request functions
exports.addCartToDb = async (req, res, next) => {
  const id = req.body._id;
  const email = req.params.email;
  const filter = { email: email, _id: id };
  const availableItem = await cartDB.findOne(filter);
  console.log(availableItem);
  if (availableItem) {
    const update = { quantity: availableItem.quantity + 1 };
    const options = { upsert: true };

    await cartDB.updateOne(filter, update, options);
  }
};

// get request function
exports.getCart = async (req, res, next) => {
  const email = req.params.email;
  const items = await cartDB.find({ email: email });
  res.send(items);
};
