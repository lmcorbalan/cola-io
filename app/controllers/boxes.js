var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , Box = mongoose.model('Box')
  ;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/boxes', function (req, res, next) {
  Box.find( { is_active: false }, function (err, docs) {
    res.render( 'boxes', { boxes: docs } )
  })
});

router.get('/boxes/:id', function (req, res, next) {
  Box.findOne( { _id: req.params.id }, function (err, box) {
    if (err || !box) {
      req.flash( "error", "Box inexistente" );
      res.redirect( '/boxes' );
    }
    box.activate( function (err, doc) {
      if (err) {
        req.flash( "error", "No se puede activar el box" );
        res.redirect( '/boxes' );
      }
      res.render( 'box' , {box: doc} );
    });


  })

});
