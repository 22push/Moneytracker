const express = require('express')
const teamcontroller = require('./../controllers/teamcontroller')

const router = express.Router();

router.route('/').post(teamcontroller.createTeam).get(teamcontroller.getallTeam);


module.exports = router;