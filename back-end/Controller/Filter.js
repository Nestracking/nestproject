const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const HotelsModel = require("../Models/Hotels.shema");
const Reservationchecking = require("./Reserved");

/**
 * This method filter reservations with parameters
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports = async function (req, res) {
    // console.log(req);
    //let FilterList = req.query.Filter;

    console.log(req.query);
    FilterList = JSON.parse("[" + req.query.Filter + "]");
    console.log(FilterList);

    // On parse les Filter pour qu'ils se déployent en liste

    let queryFilter = {};
    FilterList.forEach(function (filters) {
        if (filters.value !== "All") {
            queryFilter[filters.key] = filters.value;
        }
    });

    // On build la Query pour les filtres à l'aide des valeurs dans la liste

    let Splitter = req.query.Sort.split('/');
    let SortItem = {};
    SortItem[Splitter[0]] = Splitter[1];
    console.log(SortItem);
    // On transforme l'objet de tri en objet


    let Dates = req.query.Dates;
    // pour plus tard
    // Need to be an array of Dates
    let Chambers = req.query.Chambers;
    // Pour plus tard
    // Need to be a number

    console.log('waf')
    let DestinationList = await HotelsModel.find({'Theme': { $in: ["sun"] }});
    // Filtre DB

    //  DestinationList = await Reservationchecking(DestinationList, Dates, Chambers);

    res.json(DestinationList);
    // On renvoie la liste
}