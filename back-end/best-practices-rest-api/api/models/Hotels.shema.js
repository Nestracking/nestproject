const mongoose = require('mongoose');

var schema = new mongoose.Schema({
        "_id": {
            "$oid": String,
        },
        "SEGMENTATION": String,
        "COMPANY_1": String,
        "COMPANY_2": String,
        "STREET": String,
        "BUILDING": String,
        "POSTAL_CODE": String,
        "CITY": String,
        "COUNTRY": String,
        "UN_GEOSCHEME": String,
        "CONTINENT": String,
        "TELEPHONE_1": String,
        "FAX_1": String,
        "EMAIL_1": String,
        "URL_1": String,
        "ROOMS": Number,
        "STARS": Number,
        "BARS": String,
        "RESTAURANTS": String,
        "CONFERENCE_FACILITIES": String,
        "GEO_LATITUDE": String,
        "GEO_LONGITUDE": String,
        "Theme": [String],
        "Views": Number,
        "Sell": Number,
        "Price": Number,
        "Rating": Number,
        "Number_rating": Number,
        "Comment_ID": [{'userid':String,'comment':String}],
        "Pictures": [String]
});
// Schema hotel

module.exports = mongoose.model('hotels', schema);
// export