const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const database = require("./database");

// middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/letsbuy-ecommerce";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

database();

async function run() {
  try {
    app.get("/", (req, res) => {
      res.send("hey bro");
    });

    app.get("/user", (req, res) => {
      res.send("user found");
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("listening to ", port);
});
