const express = require("express");
const { addProduct, getProduct } = require("../controller/productController");
const router = express.Router();

router.post("/product", addProduct);
router.get("/product", getProduct);

module.exports = router;
