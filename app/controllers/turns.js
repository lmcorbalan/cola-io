var express = require('express')
  , router = express.Router()
  , config  = require('../../config/config')
  , mongoose = require('mongoose')
  , Box = mongoose.model('Box')
  ;
  // Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var call_path = 'http://' + config.proxy + '/call/';
  Box.find( {is_active: true}, function (err, docs) {
    if (err) {
      req.flash( "error", "Ha ocurrido un error" );
      res.redirect( '/' );
    }

    res.render( 'index', { boxes: docs, call_path: call_path });
  })
});
