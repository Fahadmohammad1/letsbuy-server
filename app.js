const express = require("express");
const app = express();
const cors = require("cors");
import router from './src/app/routes/index'

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

module.exports = app;
