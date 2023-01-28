const express = require("express");
const { addUser, getUser } = require("../controller/userController");
const router = express.Router();

router.get("/users", getUser);
router.post("/user", addUser);
