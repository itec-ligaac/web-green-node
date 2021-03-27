const Router    = require('express').Router();
const hotelCtrl = require('../Controllers/hotelController')


Router.route('/hotels')
      .get(hotelCtrl.getProduct)

module.exports = Router