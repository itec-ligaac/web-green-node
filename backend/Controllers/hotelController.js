const db = require('../database/database')

const Hotel = require('../database/models/hotel')
async function getProduct(req, res)
{
    var hotelResults
    Hotel.find({}, (err, hotels)=>{
        hotelResults = hotels
        res.send(hotelResults)
    }).limit(10)
}

module.exports = {
    getProduct
}