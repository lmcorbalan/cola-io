var express = require('express')
  , router = express.Router()
  ;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/call/:number', function (req, res, next) {
  var number = req.params.number;

  res.render( 'call', { call: number });
});
