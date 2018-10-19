const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const HotelsModel = require("../Models/Hotels.shema");
const Reservationchecking = require("./Reserved");
module.exports = async function (req, res) {
    let FilterList = req.query.Filter;
    // Need to be an array of object
    let Sortitem = req.query.sort;
    // Need to be an object
    let Dates = req.query.Dates;
    // Need to be an array of Dates
    let Chamber = req.query.Chamber;
    // Need to be a number
    let queryFilter = {};
    FilterList.forEach(function (filters) {
        if (filters.value !== "All") {
            queryFilter[filters.key] = filters.value;
        }

    });
    let DestinationList = await HotelsModel.find(queryFilter).sort(Sortitem);
    DestinationList = await Reservationchecking(DestinationList, Dates, Chamber);
    res.json(DestinationList);
}