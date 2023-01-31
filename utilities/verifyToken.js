const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send({ success: false, message: "Unauthorized Access" });
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
    if (err) {
      res.status(403).send({ success: false, message: "Forbidden Access" });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = verifyToken;
