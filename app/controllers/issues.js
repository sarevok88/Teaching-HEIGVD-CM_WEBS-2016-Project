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
  next();
}


/**
*vérifie l'existence d'une issue
*/
function checkIssue(req, res, next) {
  if (!req.body.id) {
    // If no user ID is given, return an error.
    res.status(400).send('Issue ID is required');
    return;
  } else if (!mongoose.Types.ObjectId.isValid(req.body.issue)) {
    // If the issue ID is not a valid MongoDB ID, no need to execute a query, return an error directly.
    res.status(400).send('No issue with ID ' + req.body.issue);
    return;
  }
  next();
}

/**
*création d'une nouvelle issue
*/
// POST /api/issues
router.post('/', checkUser, function(req, res, next) {

  var issue = new Issue(req.body);

  issue.save(function (err, createdIssue) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(createdIssue);
  });
});


/**
* récupération de toutes les issues
*/
// GET /api/issues
router.get('/', function (req, res, next) {

  Issue.find(function (err, issues) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(issues);
  });
});

/**
*récupération d'une issue via son ID
*/
// GET /api/issues/:id
router.get('/:id', function (req, res, next) {

  var issueId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(issueId)){
    res.status(404).send("404 - Issue not found");
  }
  else{
    Issue.findById(issueId, function(err, issue) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      else if (!issue) {
        res.status(404).send('404 - Issue not found');
        return;
      }
    })

    res.send(issue);
  }
});

// PUT /api/issues/:id
router.put('/:id', function (req, res, next) {

  var issueId = req.params.id;

  Issue.findById(issueId, function(err, issue) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!issue) {
      res.status(404).send('Issue not found');
      return;
    }

/*
remplir les champs qu'on peut modifier
*/
    issue.status = req.body.status;
    issue.name = req.body.name;
    issue.type = req.body.type;
    issue.status = req.body.status;
    issue.localisation = req.body.localisation;
    issue.description = req.body.description;
    issue.photo = req.body.photo;
    issue.responsable = req.body.responsable;

    issue.save(function(err, updatedIssue) {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.send(updatedIssue);
    });
  });
});

// DELETE /api/issues/:id
router.delete('/:id', function (req, res, next) {

  var issueId = req.params.id;

  Issue.remove({
    _id: issueId
  }, function(err, data) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    console.log('Deleted ' + data + ' documents');
    res.sendStatus(204);
  });
});
