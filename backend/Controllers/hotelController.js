const db    = require('../database/database')
const Hotel = require('../database/models/hotel')

const removeEmptyOrNull = (obj) => {
    Object.keys(obj).forEach(k =>
      (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
      (!obj[k] && obj[k] !== undefined) && delete obj[k]
    );
    return obj;
  };

async function getHotels(req, res)
{
    let dataToFind= {
        Hotel_Name : req.query.name ? {"$regex": req.query.name, "$options": "i"} : null,
        Hotel_City : req.query.city ? req.query.city : null,
        Hotel_Country : req.query.country

    }

    dataToFind = removeEmptyOrNull(dataToFind)
    Hotel.find(dataToFind, (err, hotels)=>{
        res.send(hotels)
    }).limit(10)
}

module.exports = {
    getHotels
}