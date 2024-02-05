//  const { createSecureServer } = require('http2')
const { response } = require('express');
const User = require('./../schema/usershema.modal')
const catchasync = require('./../utils/catchasync');
const email = require('./../utils/nodemailer')
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  };
 exports.createUser  = async (req,res) => {
    try{
      const user = await User.findOne({username: req.body.username})
        if(!user){
          const newuser = await User.create(req.body);
          res.status(200).json({
            user: newuser
        })
        }
        else{
          res.status(400).json({
            user,
            message: "username already in use"
        })
        }
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
 }
 exports.getUser = async (req, res) => {
    try{
        const allusers = await User.find();
        res.status(200).json({
            user: allusers
        })
    }
    catch (err){
        console.log(err);
        res.status(500).json({
            
            error: err.message
        })
    }
 }
 exports.loginuser = catchasync(async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        status: "fail",
        message: "email or password missing",
      });
    }
    const user = await User.findOne({ username }).select("+password");
    console.log(user.password);
    if (
      !user ||
      !(await user.correctPassword(password, user.password))
    ) {
      res.status(401).json({
        status: "fail",
        message: "username or password incorrect",
      });
    }
    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
      user
    });
  });
  exports.forgotPassword = catchasync(async (req, res, next) => {
    const user = await User.findOne({ emailid: req.body.emailid });
    if (!user)
      return res.status(404).json({ masg: "no such user with this email id" });
  
    const resetToken = await user.createcode();
    await user.save();
    const code = resetToken;
    console.log(code);
    const message = `Your verification code is \n ${resetToken}\n you didn't forget your password, please ignore this email!`;
    try {
      await email({
        email: user.emailid,
        subject: "Password Reset code",
        message,
      });
      res.status(200).json({
        status: "success",
        message: "password reset link sent to your email",
        resetToken,
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
      console.log(err);
      massage: "reset link invalid";
    }
  });
  exports.verifycode = async (req, res, next) => {
    const hashtoken = req.body.code;
    console.log(hashtoken);
    const user = await User.findOne({
      resetPasswordToken: hashtoken,
      passwordresetexpired: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "your code is invalid",
      });
    }
    res.status(200).json({
      status: "success",
      message: "go to next page",
    });
  };
  exports.resetPassword = async (req, res, next) => {
    const hashtoken = req.params.token;
    console.log(hashtoken);
    const user = await User.findOne({
      resetPasswordToken: hashtoken,
      passwordresetexpired: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "password reset link is invalid",
      });
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.passwordresetexpired = undefined;
    user.save();
    res.status(200).json({
      status: "success",
      message: "password changed successfully",
    });
  };
  exports.addExpense = async (req, res) => {
    try{
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      user.expenses.push({ "expenseId": uuidv4(), ...req.body });
      await user.save();
      res.status(200).json({ message: 'Expense added successfully', user });
    }
    catch(error){
      console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  exports.userbyid = async (req, res) => {
    try{
        const userdata = await User.findById(req.params.userId);
        res.status(200).json({userdata});
    }
    catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
  }