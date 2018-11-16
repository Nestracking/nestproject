
const express = require('express'),
      path = require("path"),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      ReservationsModel = require("../models/Reservations.schema"),
      HotelsModel = require("../models/Hotels.shema");


// NEW RESERVATION
exports.new = async function(req, res, next ){
    let Reservation = req.body;
    ReservationsModel.create({
        "UserID" :  Reservation.User,
        "HotelID":  Reservation.Hotel,
        "Chamber": Reservation.Rooms,
        "Date.start": Reservation.StartDate,
        "Date.end": Reservation.EndDate,
        "Durée": Reservation.StayTime,
    })
res.send("Nous avons créer votre réservation")
}

// DELETE

exports.delete = async function (req, res, next){
    Tank.deleteOne({ "_id.$oid" : req.query.id }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
      res.send("Nous avons supprimé notre réservation")
}



