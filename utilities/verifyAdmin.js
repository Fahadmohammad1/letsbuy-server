const UserDB = require("../model/user_model");

const verifyAdmin = async (req, res, next) => {
  const decodedEmail = req.decoded.email;

  const user = await UserDB.findOne({ email: decodedEmail });

  if (user?.role !== "admin") {
    return res.status(403).send({ message: "Forbidden Access" });
  }
  next();
};

module.exports = verifyAdmin;
