const express = require('express')
const usercontroller = require('./../controllers/usercontroller')

const router = express.Router();

router.route('/').post(usercontroller.createUser).get(usercontroller.getUser);

module.exports = router;