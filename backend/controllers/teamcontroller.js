const { createSecureServer } = require('http2')
const Team = require('./../schema/teamchema.modal')

 exports.createTeam  = async (req,res) => {
    try{
        const newTeam = await Team.create(req.body);
        newTeam.users.push(req.body.createdby)
        newTeam.save();
        res.status(200).json({
            Team: newTeam
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
 }
 exports.getallTeam = async (req, res) => {
    try{
        const teams = await Team.find();
        res.status(200).json({
            Team: teams
        })
    }
    catch(err){
        res.status(500).json({
            error: err.message
        }) 
    }
 }
 exports.getteambyuser = async (req, res) => {
    try{
        const userid = req.params.userId;
        const userteam = await Team.find({createdby: userid});
        res.status(200).json({
            Team: userteam
        })
    }
    catch(err){
        res.status(500).json({
            error: err.message
        }) 
    }
 }
 exports.joinTeambyid = async (req, res) => {
    try{
        const userid = req.params.userId;
        const teamid = req.params.teamId;
        const team = await Team.find({teamid: teamid});
        if(!team){
            res.status(404).json({
                message: 'Team not found'
            }) 
        }
        console.log(team)
        console.log(team[0].users)
        team[0].users.push(userid);
        team[0].save();
        res.status(200).json({
            updatedteam: team[0]
        })
    }
    catch(err){
        res.status(404).json({
            error: err.message
        }) 
    }
 }