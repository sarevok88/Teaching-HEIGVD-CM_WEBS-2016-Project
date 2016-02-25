var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Issue = mongoose.model('Issue'),
  User = mongoose.model('User'),
  Comment = mongoose.model('Comment');

module.exports = function (app) {
  app.use('/api/issues', router);
};

/**
 * Middleware qui vérifie l'existence d'un user
 */
function checkUser(req, res, next) {
  if (!req.body.user) {
    // If no user ID is given, return an error.
    res.status(400).send('User ID is required');
    return;
  } else if (!mongoose.Types.ObjectId.isValid(req.body.user)) {
    // If the user ID is not a valid MongoDB ID, no need to execute a query, return an error directly.
    res.status(400).send('No user with ID ' + req.body.user);
    return;
  }
}

/**
  création d'une nouvelle issue
*/
// POST /api/books
router.post('/'/*, checkUser*/, function(req, res, next) {

  var issue = new Issue(req.body);

  issue.save(function (err, createdIssue) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(createdIssue);
  });
});
