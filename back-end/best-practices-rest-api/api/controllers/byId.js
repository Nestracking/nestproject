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
    let ID = req.params.id
   console.log(ID);
    
    let DestinationList = await HotelsModel.findById(ID,{Pictures : 1 })
    console.log(DestinationList);
    res.json(DestinationList);
    
}