
const express = require('express'),
path = require("path"),
bodyParser = require('body-parser'),
mongoose = require('mongoose');
'use strict';
const fs   = require('fs');
const jwt  = require('jsonwebtoken');


// NEW RESERVATION
exports.jwtVerified = async function(req, res, next ){
const a  = 'http://localhost:4200';     // Audience
var i  = 'Nestracking';           // Issuer 
let jwtUser = req.query.jwt;
console.log('jwtUser',jwtUser);

let verifyOptions = {
    algorithm:['RS256'],
    audience:  a,
    issuer:  i
}

var publicKEY  = fs.readFileSync(path.resolve(__dirname,'../helpers/public.key'), 'utf8');
const JWT = jwt.verify(jwtUser,publicKEY,verifyOptions);
console.log('JWT =',JWT);
let date = new Date(JWT.iat * 1000)
console.log('DATE = ', date);
if(JWT){
    console.log('le jwt est validé');
    res.json({jwt: `jwt tokken verified ! Welcome ${JWT.User}`})
}else {
    console.log('le jwt ne corespond pas');
}


}




