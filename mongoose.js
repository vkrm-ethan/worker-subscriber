const mongoose = require("mongoose");

const username = process.env.DB_USERNAME || "admin";
const password = process.env.DB_PASSWORD || "admin";
const cluster = process.env.DB_CLUSTER || "cluster0.q5e8a";
const dbname = process.env.DB_DBNAME || "main";

mongoose.connect(
  process.env.LOCAL_DB_FLAG
    ? process.env.MONGO_URL || ``
    : `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

module.exports = mongoose.connection;
