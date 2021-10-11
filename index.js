require("dotenv").config({ path: __dirname + "/.env" });
const db = require("./mongoose");
const login = require("./services/login");

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected DB successfully");
  login();
});
