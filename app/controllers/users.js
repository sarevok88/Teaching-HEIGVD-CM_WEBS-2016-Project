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
 * Counts the number of issues for each user.
 */
function countIssues(ascending, callback) {

  var aggregations = [];

  // Count the number of issues by user ID.
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
    console.log(issueCounts)
    callback(undefined, issueCounts);
  });
}


// GET /api/users
router.get('/', function (req, res, next) {

  //filter by issues issues=created
  if (req.query.issues == 'created') {
    console.log('Existance d un paramètre created');

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
      criteria = {
        _id: { $in: userIds }
      };

      User.find(criteria, function(err, users) {
        if (err) {
          res.status(500).send(err);
          return;
        }

        var responseBody = [];
        for (var i = 0; i < issueCounts.length; i++) {

          // Serialize each user.
          var result = getUser(issueCounts[i]._id, users).toJSON();

          // Add the number of issues.
          result.numberOfIssues = issueCounts[i].total;

          // Add the object to the response array.
          responseBody.push(result);
        }

        // Send the response
       res.send(responseBody);
      });
    });
  }
  if (req.query.issues == 'solved') {
    console.log('Existance d un paramètre solved');

    countIssues(false, function(err, issueCounts) {
      if (err) {
        res.status(500).send(err);
        return;
      }

      // Extract the IDs of the users into an array.
      var userIds = [];
      for (var i = 0; i < issueCounts.length; i++) {
        if(issueCounts[i].solved_at != ''){
          userIds.push(issueCounts[i]._id);
        }
      }

      // Find the corresponding users.
      criteria = {
        _id: { $in: userIds }
      };

      User.find(criteria, function(err, users) {
        if (err) {
          res.status(500).send(err);
          return;
        }

        var responseBody = [];
        for (var i = 0; i < issueCounts.length; i++) {

          // Serialize each user.
          var result = getUser(issueCounts[i]._id, users).toJSON();

          // Add the number of issues.
          result.numberOfIssues = issueCounts[i].total;

          // Add the object to the response array.
          responseBody.push(result);
        }

        // Send the response
       res.send(responseBody);
      });
    });
  }
  else{
    User.find(function (err, users) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.send(users);
    });
  }

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
