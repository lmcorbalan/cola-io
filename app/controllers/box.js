var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , Box = mongoose.model('Box')
  ;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/box/:code', function (req, res, next) {
  var code = req.params.number;

  Box.findOne( { code: req.params.code }, function (err, doc) {
    if (err) {
      req.flash( "info", "El nuevo empleado se ha creado correctamente" );
      res.redirect( '/' );
    } else {
      res.render( 'box' );
    }
  })

});
