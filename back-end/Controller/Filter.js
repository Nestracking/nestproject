const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const HotelsModel = require("../Models/Hotels.shema");

module.exports = async function (req, res) {
    let FilterList = req.query.Filter;
    let Sortitem = req.query.sort;
    let queryFilter = {};
    FilterList.forEach(function (filters) {
        if (filters.value !== "All") {
            queryFilter[filters.key] = filters.value;
        }

    });
    let DestinationList = await HotelsModel.find(queryFilter).sort(Sortitem);
    res.json(DestinationList);
}