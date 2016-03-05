var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Issue = mongoose.model('Issue');

module.exports = function (app) {
  app.use('/api/users', router);
};

/**
 * @api {post} /users Create a user
 * @apiName CreateUser
 * @apiGroup Users
 *
 * @apiSuccess {String} age Age of the user.
 */
router.post('/', function (req, res, next) {
  var user = new User(req.body);

  user.save(function (err, createdUser) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(createdUser);
  });
});

function getUser(id, users) {
  for (var i = 0; i < users.length; i++) {
    if (users[i]._id.toString() == id) {
      return users[i];
    }
  }

  return null;
}

/**
 * Counts the number of books for each publisher.
 * If the format argument is a string or an array, only the books matching those formats are counted.
 */
function countIssues(ascending, callback) {

  var aggregations = [];

  // Count the number of books by publisher ID.
  aggregations.push({
    $group: {
      _id: '$user',
      total: { $sum: 1 }
    }
  });

  // Sort by total.
  aggregations.push({
    $sort: {
      total: ascending ? 1 : -1
    }
  });

  // Run the aggregations.
  Issue.aggregate(aggregations, function(err, issueCounts) {
    if (err) {
      callback(err);
      return;
    }
    console.log('FFFUUUUUUUUUUUUUUUU !');
    console.log(issueCounts)
    callback(undefined, issueCounts);
  });
}

// GET /api/users
router.get('/', function (req, res, next) {
  console.log('Début de la récuperation des utilisateurs');
  console.log(req.query);

  var criteria = {};

  //filtre par issues issues=nbrIssuesCreated
  if (req.query.issues) {
    console.log('Existance d un paramètre nbrIssues');
    criteria.nbrIssues = req.query.issues;
    console.log('Attribution de criteria: '+ criteria.nbrIssues);
    console.log('Récupération des issues');
    //var offset = req.query.offset ? parseInt(req.query.offset, 10) : 0,
    //    limit = req.query.limit ? parseInt(req.query.limit, 10) : 30;

    countIssues(false, function(err, issueCounts) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    // Extract the IDs of the users into an array.
    var userIds = [];
    for (var i = 0; i < issueCounts.length; i++) {
      userIds.push(issueCounts[i]._id);
    }

    // Find the corresponding users.
    var criteria = {
      _id: { $in: userIds }
    };

    User.find(criteria, function(err, users) {
      if (err) {
        res.status(500).send(err);
        return;
      }

      var responseBody = [];
      for (var i = 0; i < issueCounts.length; i++) {

        // Serialize each publisher.
        var result = getUser(issueCounts[i]._id, users).toJSON();

        // Add the number of books.
        result.numberOfIssues = issueCounts[i].total;

        // Add the object to the response array.
        responseBody.push(result);
      }

      // Send the response
      res.send(responseBody);
    });
  });
  }

  User.find(function (err, users) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(users);
  });
});

// GET /api/users?sort=nbrIssues || Get the list of users who have created most issues.
  router.get('/nbrIssues', function (req, res, next){
    countIssues(function(err, issueCounts) { // handle error (if any)

    var criteria = {
      user: { $in: user }
    };
    User.find(criteria, function(err, users) { if (err) {
      res.status(500).send(err);
    return; }
      var responseBody = [];
      for (var i = 0; i < issueCounts.length; i++) {
      var result = getUser(issueCounts[i]._id, users).toJSON();
      result.numberOfIssues = issueCounts[i].total;
      responseBody.push(result); }
      res.send(responseBody);
    });
  });
});

// GET /api/users/:id
router.get('/:id', function (req, res, next) {

  var userId = req.params.id;

  User.findById(userId, function(err, user) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!user) {
      res.status(404).send('User not found');
      return;
    }

    res.send(user);
  });
});

// PUT /api/users/:id
router.put('/:id', function (req, res, next) {

  var userId = req.params.id;

  User.findById(userId, function(err, user) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!user) {
      res.status(404).send('User not found');
      return;
    }

    user.forname = req.body.forname;
    user.surname = req.body.surname;
    user.nickname = req.body.nickname;
    user.dob = req.body.dob;
    user.email = req.body.email;
    user.roles = req.body.date; //comme les roles peuvent être multiple, on a un tableau de roles.

    user.save(function(err, updatedUser) {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.send(updatedUser);
    });
  });
});

// DELETE /api/users/:id
router.delete('/:id', function (req, res, next) {

  var userId = req.params.id;

  User.remove({
    _id: userId
  }, function(err, data) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    console.log('Deleted ' + data + ' documents');
    res.sendStatus(204);
  });
});
