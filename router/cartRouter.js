const {
  addCartToDb,
  getCart,
  deleteCart,
} = require("../controller/cartController");
const express = require("express");
const router = express.Router();

router.get("/cart-item/:email", getCart);
router.put("/cart-item/:email", addCartToDb);
router.delete("/cart-item/:email", deleteCart);

module.exports = router;
