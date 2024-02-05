const express = require('express')
const teamcontroller = require('./../controllers/teamcontroller')

const router = express.Router();

router.route('/').post(teamcontroller.createTeam).get(teamcontroller.getallTeam);
router.route('/:userId').get(teamcontroller.getteambyuser);
router.route('/:teamId/:userId').post(teamcontroller.joinTeambyid)
module.exports = router;