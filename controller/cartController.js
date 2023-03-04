const cartDB = require("../model/cart_model");

// get request function
exports.getCart = async (req, res, next) => {
  const email = req.params.email;
  const items = await cartDB.find({ email: email });
  res.send(items);
};

// post request functions
exports.addCartToDb = async (req, res, next) => {
  const id = req.body._id;
  const { name, brand, image, description, email, category, price, rating } =
    req.body;

  const requesterEmail = req.params.email;
  const filter = { email: requesterEmail, productId: id };
  const availableItem = await cartDB.findOne(filter);

  if (availableItem) {
    const options = { upsert: true };
    const update = { quantity: availableItem.quantity + 1 };
    await cartDB.updateOne(filter, update, options);
    return res.send({ success: false, message: "quantity increased" });
  }

  const data = await cartDB.create({
    name,
    brand,
    image,
    description,
    email,
    category,
    price,
    rating,
    productId: id,
    quantity: 1,
  });
  res.send({ success: true, data: data, message: "Item added to cart" });
};

exports.deleteCart = async (req, res, next) => {
  const id = req.body.productId;
  const requesterEmail = req.params.email;
  const filter = { email: requesterEmail, productId: id };
  const availableItem = await cartDB.findOne(filter);

  if (availableItem) {
    const update = { quantity: availableItem.quantity - 1 };
    const data = await cartDB.updateOne(filter, update);
    return res.send({
      success: false,
      message: "quantity Decreased",
      data: data,
    });
  }
};
