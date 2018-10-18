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
// Schema des User

module.exports = Mongoose.model('user', schema);
// export