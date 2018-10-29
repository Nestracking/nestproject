const express = require('express'),
      path = require("path"),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      nodemailer = require("nodemailer"),
      ReservationsModel = require("./Models/Reservations.schema"),
      UsersModel = require("./Models/Users.shema"),
      app = express(),
      UserRouter = require(`${process.cwd()}/api/routes/user`),
      ReserveRouter = require(`${process.cwd()}/api/routes/reserve`),
      FilterRouter = require(`${process.cwd()}/api/routes/filter`);


// Bodyparser 
app.use(bodyParser());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Authorisations
app.use(function (req, res, next) {
     res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    next();
});




// Set Router on
app.use('/user',UserRouter)
// Set Router on
app.use('/reserve',ReserveRouter)
// Set Router on 
app.use('/filter', FilterRouter)


module.exports = app
    
