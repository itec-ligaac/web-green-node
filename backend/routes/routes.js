const Router      = require('express').Router();
const hotelCtrl   = require('../Controllers/hotelController')
const bodyParser  = require('body-parser');
const { json }    = require('body-parser');

const jsonParser  = bodyParser.json();

Router.route('/hotels', jsonParser)
      .get(hotelCtrl.getHotels)

module.exports = Router