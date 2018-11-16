const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      ReserveRouter = require(`./api/routes/reserve`),
      FilterRouter = require(`./api/routes/filter`);
      UserRouter = require(`./api/routes/user`),
      // path = require("path"),
      // nodemailer = require("nodemailer"),
      
// Bodyparser 
app.use(bodyParser());
// app.use(bodyParser.json({ limit: '10mb' }));
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
app.use('/reserve', ReserveRouter)
// Set Router on 
app.use('/filter', FilterRouter)


module.exports = app
    
