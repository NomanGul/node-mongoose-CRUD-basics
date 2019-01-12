// console.log("Hello World");
const express = require("express");
const mongoose = require("./config/db");
const app = express();


//mongoose configeration

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("connected");
});
//mongoose configeration



//req accept
app.use(express.json());
//req accept

app.use("/", require("./routes/index.js"));
app.listen(3500, () => console.log("Heloo World"));

// app.use("/user", (req, res) => {
//   console.log("working");
//   res.send({ name: "noman" });
// });
