var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Issue = mongoose.model('Issue');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.redirect('/apidoc');
});