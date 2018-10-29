const mongoose = require('mongoose');

var schema = new mongoose.Schema({
        "_id": {
            "$oid": String,
        },
        "SEGMENTATION": String,
        "COMPANY1": String,
        "COMPANY 2": String,
        "STREET": String,
        "BUILDING": String,
        "POSTAL CODE": String,
        "CITY": String,
        "COUNTRY": String,
        "UN GEOSCHEME": String,
        "CONTINENT": String,
        "TELEPHONE 1": String,
        "FAX 1": String,
        "EMAIL 1": String,
        "URL 1": String,
        "ROOMS": Number,
        "STARS": Number,
        "BARS": String,
        "RESTAURANTS": String,
        "CONFERENCE FACILITIES": String,
        "GEO LATITUDE": String,
        "GEO LONGITUDE": String,
        "Theme": [String],
        "Views": Number,
        "Sell": Number,
        "Price": Number,
        "Rating": Number,
        "Number rating": Number,
        "Comment ID": [{'userid':String,'comment':String}],
        "Pictures": [String]
});
// Schema hotel

module.exports = mongoose.model('hotels', schema);
// export