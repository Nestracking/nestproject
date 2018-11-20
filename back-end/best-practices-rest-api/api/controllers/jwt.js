
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
const JWT = jwt.verify(jwtUser,publicKEY,verifyOptions, function(err, decoded) {
if(err){
    console.log(err);
    res.json({
        'Message' : err,
    'Validity' : false
})
}
else{
    console.log(decoded)
    res.json({ 
        'Message' : `${decoded.User}`,
        'Validity' : true
});

}
});



}




