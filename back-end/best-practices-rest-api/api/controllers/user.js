const express = require('express'),
      path = require("path"),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      ReservationsModel = require("../models/Reservations.schema"),
      UserModel = require("../models/Users");

      'use strict';
      const fs   = require('fs');
      const jwt  = require('jsonwebtoken');
      /**
 * This method filter reservations with parameters
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.createuser = async function (req, res) {
let UserInfos = req.query.user;
// On récupère les données

// Parsing à faire

let UserFind = await UserModel.find({ 'Name' : UserInfos.Name}, {Password: 1});
// On cherche si on a des User avec ce nom
if(UserFind === []){
    // S'il n'y en a pas on créer l'user
UserModel.create({
'Name': UserInfos.Name,
'Password': UserInfos.Password
}, function (err, newuser){
    if(err) return handleError(err)
});
res("Votre compte a bel et bien été créer !")
}else{
    // Sinon, on renvoye un message.
res("Ce Nom est déja pris !")
}

}

exports.connectuser = async function (req, res){
let ConnectionInfo = req.query.ConnectionInfo;

/// Parsing

let UserFind = await UserModel.find({ 'Name' : UserInfos.Name}, {Password: 1});

if(UserFind[0].Password === ConnectionInfo.Password){

// Private and Public Key
var privateKEY  = fs.readFileSync('./private.key', 'utf8');
var publicKEY  = fs.readFileSync('./public.key', 'utf8');

var i  = 'Nestracking';           // Issuer 
var s  = ConnectionInfo.user;    // Subject 
var a  = 'http://localhost:4200';     // Audience

// PAYLOAD
const payload = {
    User: ConnectionInfo.User,
    Password: ConnectionInfo.User
   };

// SIGNING OPTIONS
const signOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  "RS256"
   };

const JWT = jwt.sign(payload,privateKEY,signOptions);
console.log(JWT);
res.json(JWT);
}else if(UserFind = []){
res.json({Error: "L'utilisateur n'existe pas"})
} else {
res({Error : "Le mot de passe est incorrect, arrêtez d'essayer de vous connectez sur le compte d'un autre !"})    
}
}