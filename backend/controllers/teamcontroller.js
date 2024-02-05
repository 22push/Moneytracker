const { createSecureServer } = require('http2')
const Team = require('./../schema/teamchema.modal')

 exports.createTeam  = async (req,res) => {
    try{
        const newTeam = await Team.create(req.body);
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
        const userteam = await Team.find()
    }
    catch{

    }
 }