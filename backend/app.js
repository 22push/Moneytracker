const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const userrouter = require('./routes/userroutes')
const teamrouter = require('./routes/teamroutes')
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use('/user', userrouter);
app.use('/team', teamrouter);
app.use(express.static(`${__dirname}/public`));
module.exports = app;
