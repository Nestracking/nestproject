const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    "UserID" : String,
    "HotelID": String,
    "Chamber": Number,
    "Date.start": String,
    "Durée": Number,
});
// Schema des reservations

module.exports = mongoose.model('reservation', schema);
// Export