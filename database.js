import { set, connect } from "mongoose";

const database = async () => {
  const url = `mongodb+srv://letsbuyUser:${process.env.PASS}@cluster0.z0qvw8j.mongodb.net/?retryWrites=true&w=majority`;
  set("strictQuery", false);
  await connect(url)
    .then((data) => {
      console.log("connected");
    })
    .catch((e) => console.log(e));
};

export default database;
