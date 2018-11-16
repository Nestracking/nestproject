const express = require('express'),
      path = require("path"),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      ReservationsModel = require("../models/Reservations.schema"),
      UserModel = require('../models/Users.shema');

      'use strict';
      const fs   = require('fs');
      const jwt  = require('jsonwebtoken');
      /**
 * This method filter reservations with parameters
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.createUser = async function (req, res) {

    // console.log('REQ',req);
    UserInfos = req.body;
    console.log(UserInfos);
    // On récupère les données

    // Parsing à faire

    let UserFind = await UserModel.find({ 'Name' : UserInfos.user}, {Password: 1});
    // On cherche si on a des User avec ce nom
    console.log(UserFind);
    if(UserFind.length === 0){
    // S'il n'y en a pas on créer l'user
     
    UserModel.create({
        'Name': UserInfos.user,
        'Password': UserInfos.password,
        'Email': UserInfos.email
    }, function (err, newuser){
            if(err) return handleError(err)
        });
        res.json({Send: "Votre compte a bel et bien été créer !"})
    }else{
    // Sinon, on renvoye un message.
    res.json({Error :"Ce Nom est déja pris !"})
    }

}

exports.connectuser = async function (req, res){
let ConnectionUser = req.query.user
let ConnectionPassword = req.query.password

/// Parsing

let UserFind = await UserModel.find({ 'Name' : ConnectionUser}, {Password: 1});
console.log(UserFind);
if(UserFind[0].Password === ConnectionPassword){

// Private and Public Key
var privateKEY  = fs.readFileSync(path.resolve(__dirname,'../helpers/private.key'), 'utf8');
var publicKEY  = fs.readFileSync(path.resolve(__dirname,'../helpers/public.key'), 'utf8');

var i  = 'Nestracking';           // Issuer 
var s  = ConnectionUser;    // Subject 
var a  = 'http://localhost:4200';     // Audience

// PAYLOAD
const payload = {
    User: ConnectionUser,
    Password: ConnectionPassword
   };

// SIGNING OPTIONS
const signOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  "RS256"
   };
console.log('waf');
const JWT = jwt.sign(payload,privateKEY,signOptions);
console.log(JWT);
res.json(JWT);
}else if(UserFind.length === 0){
res.json({Error: "L'utilisateur n'existe pas"})
} else {
res.json({Error : "Le mot de passe est incorrect, arrêtez d'essayer de vous connectez sur le compte d'un autre !"})    
}
}