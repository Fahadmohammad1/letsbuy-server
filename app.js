const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// product routes
const productRouter = require("./router/productRouter");
app.use("/product/v1", productRouter);

// user routes
const userRouter = require("./router/userRouter");
app.use("/user/v1", userRouter);

module.exports = app;
