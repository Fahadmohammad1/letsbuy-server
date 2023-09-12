import { findOne } from "../model/user_model";

const verifyAdmin = async (req, res, next) => {
  const decodedEmail = req.decoded.email;

  const user = await findOne({ email: decodedEmail });

  if (user?.role !== "admin") {
    return res.status(403).send({ message: "Forbidden Access" });
  }
  next();
};

export default verifyAdmin;
