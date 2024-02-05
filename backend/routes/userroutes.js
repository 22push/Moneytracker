const express = require('express')
const usercontroller = require('./../controllers/usercontroller')

const router = express.Router();

router.route('/').post(usercontroller.createUser).get(usercontroller.getUser);
router.route('/login').post(usercontroller.loginuser);
router.route('/forgotPassword').post(usercontroller.forgotPassword);
router.route('/verifycode').post(usercontroller.verifycode);
router.route('/resetpassword/:token').patch(usercontroller.resetPassword);
router.route('/:userId/addexpense').post(usercontroller.addExpense);
router.route('/:userId').get(usercontroller.userbyid);
module.exports = router;