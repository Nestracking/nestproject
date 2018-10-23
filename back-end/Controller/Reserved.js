const ReservationsModel = require("../Models/Reservations.schema");
const HotelsModel = require("../Models/Hotels.shema");
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

modules.export = (Hotels, Dates, NbreChambre) => {
    Hotels.filter((Hotel) => {
        BiggestReservation = 0;

        Dates.Foreach(async (Date) => {

            Reservation = await ReservationsModel.find({ 'HotelID': Hotel._id.$oid, 'Date.start': Date }, { "Chamber": 1, "_id.$oid": 0});
            Reservation = await Reservation.reduce((sum, x) => sum + x);
            if (Reservation > BiggestReservation) {
                BiggestReservation = Reservation;
            }
        });

        if (Hotel.ROOMS >= BiggestReservation + NbreChambre) {
            return Hotel;
        }
    });

}