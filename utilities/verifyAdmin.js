const UserDB = require("../model/user_model");

const verifyAdmin = (req, res, next) => {
  const decodedEmail = req.decoded.email;

  const user = UserDB.findOne({ email: decodedEmail });

  if (user?.role !== "admin") {
    return res.status(403).send({ message: "Forbidden Access" });
  }
  next();
};

module.exports = verifyAdmin;
