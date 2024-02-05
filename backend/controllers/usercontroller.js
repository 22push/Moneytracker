 const { createSecureServer } = require('http2')
const User = require('./../schema/usershema.modal')

 exports.createUser  = async (req,res) => {
    try{
        const newuser = await User.create(req.body);
        res.status(200).json({
            user: newuser
        })
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