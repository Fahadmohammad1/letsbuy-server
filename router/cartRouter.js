const { addCartToDb } = require("../controller/cartController");
const express = require("express");
const router = express.Router();

router.post("/cart-item/:email", addCartToDb);

module.exports = router;
