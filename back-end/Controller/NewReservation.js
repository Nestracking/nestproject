const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ReservationsModel = require("../Models/Reservations.schema");


module.exports = async function(req, res){
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