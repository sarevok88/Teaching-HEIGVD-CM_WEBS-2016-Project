var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

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

    user.name = req.body.name;
    user.age = req.body.age;

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

// GET /api/users/:id
/*
router.get(req.query, function (req, res, next) {
  req.get("nomduparam");

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

/*

GET User  /users?sort=nbrIssues Get the list of users who have created most issues.
GET User  /issues?status=solved&user={id} Get the list of users who have solved most issues.
GET user  /users?issues=unsolved&issues=rejected  Get the list of users who have the least assigned issues not yet solved or rejected.
*/