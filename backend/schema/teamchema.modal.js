const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const Teammodel = new Schema({
  teamid: {
    type: "Number"
  },
  teamname:{
    type: "String",
    required: [true, "kjbnijno"]
  },
  user:{
    type: Schema.Types.ObjectId,
    ref:"user",
  }
},
{
    timestamps: true
  }
);
Teammodel.pre("save", async function (next) {
    const randomTeamId = Math.floor(1000 + Math.random() * 9000);
 
    const teamWithSameId = await mongoose.model("team").findOne({ teamid: randomTeamId });
    if (teamWithSameId) {
      
      return this.pre("save", arguments);
    }
  
    this.teamid = randomTeamId;
  
    next();
  });

const Teams = mongoose.model("team", Teammodel);

module.exports = Teams;
