const express = require('express'),
      path = require("path"),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      HotelsModel = require("../models/Hotels.shema"), 
      Reservationchecking = require('../helpers/reserved');

/**
 * This method filter reservations with parameters
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.filter = async function (req, res) {
   // console.log(req);
    //let FilterList = req.query.Filter;

    console.log(req.query);
    FilterList = JSON.parse("[" + req.query.Filter + "]");


console.log(FilterList);
    // Need to be an array of object
    let Sortitem = req.query.Sort;
    // Pas Encore occupé
    // Need to be an object
    let Dates = req.query.Dates;
    // Need to be an array of Dates
    let Chambers = req.query.Chambers;
    // Need to be a number
    let queryFilter = {};
    FilterList.forEach(function (filters) {
        if (filters.value !== "All") {
            queryFilter[filters.key] = filters.value;
        }
    });
    let DestinationList = await HotelsModel.find(queryFilter).sort();
   //  DestinationList = await Reservationchecking(DestinationList, Dates, Chambers);
   console.log(DestinationList)
    res.json(DestinationList);
}