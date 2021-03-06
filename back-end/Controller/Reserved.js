const ReservationsModel = require("../Models/Reservations.schema");
const HotelsModel = require("../Models/Hotels.shema");
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

module.export = (Hotels, Dates, NbreChambre) => {
    Hotels.filter((Hotel) => {
        BiggestReservation = 0;

        Dates.Foreach(async (Dates) => {

            Reservation = await ReservationsModel.find({ 'HotelID': Hotel._id.$oid, 'Date.start': Dates }, { "Chamber": 1, "_id.$oid": 0});
            // Dates checker avec dates départs et dates fins.
            Reservation = await Reservation.reduce((sum, x) => sum + x);
            if (Reservation > BiggestReservation) {
                BiggestReservation = Reservation;
            }
        });

        if (Hotel.ROOMS >= BiggestReservation + NbreChambre) {
            return Hotel;
        }
    });
// return
}