const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");

const ReservationsModel = require("./Models/Reservations.schema");
const UsersModel = require("./Models/Users.shema");
const uri = "mongodb://Kaillens:wafwafmiaou-2@ds223009.mlab.com:23009/arnaudscieur";

const db = mongoose.connect(uri, function (err, response) {
    if (err) { console.log(err); }
});

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
     res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    next();
});


const Filter = require("./Controller/Filter.js")
app.get("/Filter", Filter);


const DeleteReservation = require("./Controller/DeleteReservation.js");
app.delete("/DeleteReservation", DeleteReservation);


app.listen(process.env.PORT || 8014, async () => {
    console.log('waf waf 8014 waf waf');
});
    
