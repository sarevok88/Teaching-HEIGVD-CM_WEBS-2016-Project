var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Issue = mongoose.model('Issue');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Issue.find(function (err, issues) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      issues: issues
    });
  });
});
