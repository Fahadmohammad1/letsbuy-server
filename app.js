const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// all routes
const productRouter = require("./router/productRouter");
app.use("/product/v1", productRouter);

module.exports = app;
