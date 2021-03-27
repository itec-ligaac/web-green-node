const mongoose = require('mongoose')

const hotelMdl = new mongoose.Schema({
    Hotel_Name:       String,
    Hotel_City:       String,
    Hotel_Address:    String,
    Hotel_Country:    String,
    Hotel_lat:        Number,
    Hotel_lng:        Number,
    Bed_Type :        String,

    //Reviews
    score    :        Number,
    negReview:        String,
    posReview:        String

})

const Hotel    = mongoose.model("hotels", hotelMdl)
module.exports = Hotel