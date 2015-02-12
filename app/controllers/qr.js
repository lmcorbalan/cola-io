var express = require('express')
  , router  = express.Router()
  , qr      = require('qr-image')
  , config  = require('../../config/config')
  ;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/qr/:id', function (req, res, next) {
  console.log(config)

  var qr_id = req.params.id;
  var code = qr.image( 'http://' + config.proxy + '/call/' + qr_id  , { type: 'png' });
  res.type('png');
  code.pipe(res);

});
