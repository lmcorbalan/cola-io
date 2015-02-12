var express = require('express')
  , router  = express.Router()
  , qr      = require('qr-image')
  , config  = require('../../config/config')
  ;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/qr/:box_id/:id', function (req, res, next) {
  var box_id = req.params.box_id;
  var qr_id = req.params.id;
  var code = qr.image( 'http://' + config.proxy + '/call/' + box_id + '/' + qr_id  , { type: 'png' });
  res.type('png');
  code.pipe(res);

});
