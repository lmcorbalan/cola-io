var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , Box = mongoose.model('Box')
  ;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/call/:box/:number', function (req, res, next) {
  Box.findOne( {_id: req.params.box}, function (err, doc) {
    if (err)
      req.flash( "error", "Ha ocurrido un error" );

    res.render( 'call', { box: doc, call: req.params.number });
  })

});
