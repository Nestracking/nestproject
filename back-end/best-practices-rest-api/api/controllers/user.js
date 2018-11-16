const express = require('express'),
      path = require("path"),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      ReservationsModel = require("../models/Reservations.schema"),
      UserModel = require('../models/Users.shema');

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

    let UserFind = await UserModel.find({ 'Name' : UserInfos.user}, {Password: 1}, {Email:1});
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

}