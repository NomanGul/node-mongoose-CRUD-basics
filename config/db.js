var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://noman:noman123@ds243054.mlab.com:43054/mern-stack-app",
  { useNewUrlParser: true }
);

module.exports = mongoose;
