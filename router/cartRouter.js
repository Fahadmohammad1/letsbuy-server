const { addCartToDb } = require("../controller/cartController");
const express = require("express");
const router = express.Router();

router.post("/cart-item", addCartToDb);

module.exports = router;
