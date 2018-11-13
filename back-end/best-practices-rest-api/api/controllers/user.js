const express = require('express'),
      path = require("path"),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      ReservationsModel = require("../models/Reservations.schema"),
      UserModel = require("../models/Users");

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

}