const express = require('express'),
      path = require("path"),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      HotelsModel = require("../models/Hotels.shema"),
      ObjectId = require('mongodb').ObjectID;
 

/**
 * This method filter reservations with parameters
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.byId= async function (req, res) {
    let ID = req.query.id
   console.log(ID);
    
    let DestinationList = await HotelsModel.find({_id : ObjectId(ID)}, {});
    console.log(DestinationList);
    res.json(DestinationList);
    
}