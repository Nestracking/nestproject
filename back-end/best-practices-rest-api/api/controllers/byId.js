const express = require('express'),
      path = require("path"),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      HotelsModel = require("../models/Hotels.shema");
 

/**
 * This method filter reservations with parameters
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.byId= async function (req, res) {
    let ID = req.query.id
   console.log(ID);
    
    // let DestinationList = await HotelsModel.find({_id: ID},{Pictures: 1})
    let DestinationList = await HotelsModel.find({id: "5bc98ecba9053617f727b8ff"}, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      })
    console.log(DestinationList);
    res.json(DestinationList);
    
}