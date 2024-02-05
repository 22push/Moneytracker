const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const signupmodel = new Schema({
  name: {
    type: "string",
    required: [true, "Please tell us your name"],
  },
  phoneno: {
    type: "Number",
    required: [true, "Please tell us your phone number"],
  },
  emailid: {
    type: "string",
    required: [true, "Please provide your email"],
    unique: true,
  },
  password: {
    type: "string",
    required: [true, "Please provide a password"],
  }
},
{
    timestamps: true
  }
);

const signup = mongoose.model("user", signupmodel);

module.exports = signup;
