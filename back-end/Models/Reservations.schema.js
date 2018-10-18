var schema = new Mongoose.Schema({
    "UserID" : String,
    "HotelID": String,
    "Chamber": Number,
    "Date.start": String,
    "Durée": Number,
});
// Schema des reservations

module.exports = Mongoose.model('reservation', schema);
// Export