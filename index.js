const port = process.env.PORT || 5000;
import database from "./database";
import { get, listen } from "./app";
require("dotenv").config();

database();

get("/", (req, res, next) => {
  res.send("hello");
});

listen(port, () => {
  console.log("listening to ", port);
});
