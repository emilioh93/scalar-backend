import mongoose from "mongoose";

const url =
  "mongodb+srv://emiliohurtado:scalar2021@cluster0.v8dkj.mongodb.net/test";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB connection established");
});
