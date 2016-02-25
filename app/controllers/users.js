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


// GET /api/users?sort=nbrIssues || Get the list of users who have created most issues.
router.get('/api/users?sort=nbrIssues', function (req, res, next){
  Issue.find(function (err, users) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(users);
  });
});

/* 
 User.find(function (err, users) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(users);
  });
  countIssues(filters, sorting, pagination)



router.get('/:id', function (req, res, next) {

  var nbrIssues = req.query.nbrIssues;

  var criteria = {};
  // Filter by publisher.
  if (req.query.nbrIssues) {
  criteria.publisherId = req.query.publisherId; }
  // Filter by format. if (req.query.format) {
  criteria.format = req.query.format; }
  // Find all matching books. Book.find(criteria, function(err, books) {
    if (err) {
      res.status(500).send(err);
      return;
  }
    res.send(books);
  });

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