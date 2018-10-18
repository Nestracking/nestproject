var schema = new Mongoose.Schema({
        "Name" : String,
        "Password": String,
        "UserRatings": [{
        "HotelID": String,
        "Rating": Number,
        }],
        "UserComments": [{
          "HotelID": String,
          "Comment": String,
                        }],
                    });
// Schema des reservations

module.exports = Mongoose.model('user', schema);
// Schéma dog pour notre collections dogs