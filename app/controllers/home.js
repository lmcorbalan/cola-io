var express = require('express')
  , router = express.Router()
  , config  = require('../../config/config')
  ;
  // Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var call_path = 'http://' + config.proxy + '/call/';
  res.render( 'index', { call_path: call_path });
});
