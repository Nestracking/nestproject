const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ReservationsModel = require("../Models/Reservations.schema");

module.exports = async function(req, res){
   ReservationsModel.deleteOne({ "_id.$oid" : req.query.id }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
 }