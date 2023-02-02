const UserDB = require("../model/user_model");
const sendToken = require("../utilities/sendToken");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

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

//update
exports.updateUser = async (req, res, next) => {
  const id = req.params.id;

  if (mongoose.Types.ObjectId.isValid(id)) {
    await UserDB.findByIdAndUpdate(
      id,
      { $set: { role: "admin" } },
      { new: true }
    )
      .then((docs) => {
        if (docs) {
          return res.send({ success: true, data: docs });
        } else {
          return res.send({ success: false, data: "no such user exist" });
        }
      })
      .catch((err) => {
        return res.send(err);
      });
  } else {
    reject({ success: "false", data: "provide correct key" });
  }
};
