const UserDB = require("../model/user_model");

//get
exports.getUser = async (req, res, next) => {
  const users = await UserDB.find({});
  res.send(users);
};

//post
exports.addUser = async (req, res, next) => {
  const email = req.body.email;
  const availableUser = UserDB.findOne({ email: email });
  if (availableUser) {
    res.send({ success: false, message: "user already available" });
  }
  await UserDB.create(req.body);
  res.send({ success: true, message: "user added successfully" });
};
