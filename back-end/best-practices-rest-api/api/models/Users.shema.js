const mongoose = require('mongoose');

var schema = new mongoose.Schema({
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

module.exports = mongoose.model('user', schema);
// export