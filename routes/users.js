const express = require("express");
const router = express.Router();
const Users = require("../model/Users");

router.get("/getAll", (req, res) => {
  // console.log(req.query.name);
  // res.send("getAll");
  Users.find({})
    .then(result => res.send(result))
    .catch(err => {
      console.log(err);
    });
});

router.post("/addUser", (req, res) => {
  console.log(req.body);
  const user = new Users(req.body);
  user
    .save()
    .then(res => console.log("res>>>>", res))
    .catch(err => console.log(err));
});

router.post("/updateAge", (req, res) => {
  console.log("updateAge bhag raha ha")
  console.log("req.body", req.body)
  Users.collection.updateOne({"email" : req.body.email}, { $set: { "age" : req.body.age } } )
})

router.delete("/removeUser", (req, res) => {
  console.log("remove age chal raha ha")
  console.log("req.body", req.body)
  Users.collection.deleteOne({ "email" : req.body.email })
})

module.exports = router;
