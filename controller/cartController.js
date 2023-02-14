const cartDB = require("../model/cart_model");

// post request functions
exports.addCartToDb = async (req, res, next) => {
  const id = req.body._id;
  const email = req.params.email;
  const emailFilter = await cartDB.findOne({ email: email });
  console.log(emailFilter);

  if (!emailFilter) {
    const availableItem = await cartDB.findById(id);
    if (availableItem) {
      // await cartDB.updateOne(
      //   { _id: id },
      //   { $set: { quantity: availableItem.quantity + 1 } }
      // );
      // return res.send({ success: false, message: "quantity increased" });
      availableItem.quantity = availableItem.quantity + 1;
      await availableItem.save();
      return res.send({ success: false, message: "quantity increased" });
    }
  } else {
    const data = await cartDB.create({ ...req.body, quantity: 1 });
    res.send({ success: true, data: data, message: "product added to Cart" });
  }
};

// get request function
exports.getCart = async (req, res, next) => {
  const email = req.params.email;
  const items = await cartDB.find({ email: email });
  res.send(items);
};
