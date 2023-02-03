const express = require("express");
const {
  addUser,
  getUser,
  updateUser,
} = require("../controller/userController");
const verifyAdmin = require("../utilities/verifyAdmin");
const verifyToken = require("../utilities/verifyToken");
const router = express.Router();

router.get("/users", verifyToken, getUser);
router.post("/user", addUser);
router.put("/user/:id", verifyToken, verifyAdmin, updateUser);

module.exports = router;
