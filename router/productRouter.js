const express = require("express");
const { addProduct, getProduct } = require("../controller/productController");
const verifyToken = require("../utilities/verifyToken");
const router = express.Router();

router.post("/product", addProduct);
router.get("/products", getProduct);

module.exports = router;
