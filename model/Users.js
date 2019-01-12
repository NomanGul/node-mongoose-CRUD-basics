const mongoose = require("mongoose");


//scheema

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

//scheema


//collect name is user
const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;

//collect name is user