const { addCartToDb, getCart } = require("../controller/cartController");
const express = require("express");
const router = express.Router();

router.get("/cart-item/:email", getCart);
router.post("/cart-item", addCartToDb);

module.exports = router;
