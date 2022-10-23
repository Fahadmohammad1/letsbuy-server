const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("hey bro");
});

app.get("/user", (req, res) => {
  res.send("user found");
});

app.listen(port, () => {
  console.log("listening to ", port);
});
