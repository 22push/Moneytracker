const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;
const signupmodel = new Schema({
  username: {
    type: "string",
    required: [true, "Please tell us your username"],
    unique: true
  },
  name: {
    type: "string",
    required: [true, "Please tell us your name"],
  },
  emailid: {
    type: "string",
    required: [true, "Please provide your email"],
    unique: true,
  },
  password: {
    type: "string",
    required: [true, "Please provide a password"],
  },
  expenses: {
    type: [Object],
    default: [],
  },
  resetPasswordToken :{
    type:"string",
    },
    passwordresetexpired :Date,
    passwordChangedAt :Date,
},
{
    timestamps: true
  }
);
signupmodel.pre("save", async function (next) {

  this.password = await bcrypt.hash(this.password, 12);
  next();
});
signupmodel.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
signupmodel.methods.createcode  = function (){
  const resenttoken  = Math.floor(Math.random() *100000) + 100000
  this.resetPasswordToken = resenttoken;
  this.passwordresetexpired = Date.now() + 600000;
  return resenttoken
}
signupmodel.methods.addExpense = function (expense) {
  this.expenses.push(expense);
};
const signup = mongoose.model("user", signupmodel);

module.exports = signup;
