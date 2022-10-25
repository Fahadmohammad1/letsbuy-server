const port = process.env.PORT || 5000;
const database = require("./database");
const app = require("./app");

// const uri = "mongodb://localhost:27017/letsbuy-ecommerce";

database();

app.get("/", (req, res, next) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("listening to ", port);
});
