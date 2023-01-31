const UserDB = require("../model/user_model");
const sendToken = require("../utilities/sendToken");

//get
exports.getUser = async (req, res, next) => {
  const users = await UserDB.find({});
  res.send(users);
};

//post
exports.addUser = async (req, res, next) => {
  const email = req.body.email;
  console.log(email);
  const availableUser = await UserDB.findOne({ email: email });
  if (availableUser) {
    sendToken(availableUser, 200, res);
  } else {
    const user = await UserDB.create(req.body);
    sendToken(user, 200, res);
  }
};
