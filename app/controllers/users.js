var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Issue = mongoose.model('Issue');

module.exports = function (app) {
  app.use('/api/users', router);
};

/**
  *TOdo
  *Validations
  *Requetes spéciales
*/

/**
 * @api {post} /users Create a user
 * @apiName CreateUser
 * @apiGroup Users
 *
 * @apiSuccess {String} age Age of the user.
 */
router.post('/', function (req, res, next) {
  console.log("omg");
  var user = new User(req.body);

  user.save(function (err, createdUser) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(createdUser);
  });
});


// GET /api/users
router.get('/', function (req, res, next) {
  User.find(function (err, users) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(users);
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

function countIssues(callback){
  console.log("lancement de la fonction countIssues");
  Issue.aggregate([
  {
    $group: {
          _id: '$user',
          total: { $sum: 1 }
        }
  }, {
    $sort: { total: -1 } 
  }
  ], function(err, issueCounts){
    if(err){
      callback(err);
    }else{
      callback(undefined, issueCounts);
      console.log("Resultat: " + callback);
      console.log("Fin de la fonction countIssues");
    }
  });
}

// GET /api/users?sort=nbrIssues || Get the list of users who have created most issues.
router.get('/nbrIssues', function (req, res, next){
    console.log("NTM");
    countIssues(function(err, issueCounts) { // handle error (if any)
    var criteria = {
      _id: { $in: user }
    };
    User.find(criteria, function(err, users) {
    if (err) {
        res.status(500).send(err);
    return; }
      var responseBody = [];
      for (var i = 0; i < issueCounts.length; i++) {
        var result = getUser(issueCounts[i]._id, users).toJSON();
        result.numberOfIssues = issueCounts[i].total;
        responseBody.push(result);
      }
      res.send(responseBody);
    });
  });
});