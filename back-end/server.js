const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");

const HotelsModel = require("./Models/Hotels.shema");
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
    // res.setHeader( 'Access-Control-Allow-Origin', process.env.PORT);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    next();
});


app.get("/Filter", async function (req, res, ) {
    let FilterList = req.query.Filter;
    let Sortitem = req.query.sort;
    let queryFilter = {};
    console.log(FilterList);
    FilterList.forEach(function (filters) {
        if (filters.value !== "All") {
            queryFilter[filters.key] = filters.value;
        }

    });
    let DestinationList = await HotelsModel.find(queryFilter).sort(Sortitem);
    res.json(DestinationList);
});


app.listen(process.env.PORT || 8014, async () => {
    console.log('waf waf 8014 waf waf');
})

