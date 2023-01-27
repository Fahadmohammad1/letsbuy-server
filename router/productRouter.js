const express = require("express");
const { addProduct, getProduct } = require("../controller/productController");
const router = express.Router();

router.post("/post", addProduct);
router.get("/get", getProduct);

module.exports = router;
