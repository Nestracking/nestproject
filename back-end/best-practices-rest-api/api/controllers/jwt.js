
const express = require('express'),
path = require("path"),
bodyParser = require('body-parser'),
mongoose = require('mongoose');



// NEW RESERVATION
exports.jwtVerified = async function(req, res, next ){
let jwtUser = req.body;
console.log(jwtUser);
res.send("JwtVerified")
}




