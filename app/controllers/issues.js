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

  issue.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

  issue.save(function (err, createdIssue) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(createdIssue);
  });
});


/**
* GET /api/issues
* si pas de param, recupération de toutes les issues, sinon recup des issues d'après les param
*/

router.get('/', function (req, res, next) {
  var criteria = {};

  //Filtre par numero d'id
  if(req.query.issueId)
  {
    var issueId = req.query.issueId;

    Issue.findById(issueId, function(err, issue) {
      if (err) {
        res.status(500).send(err);
        return;
      } else if (!issue) {
        res.status(404).send('Issue not found');
        return;
      }
      res.send(issue);
    });
    return;
  }

  // Filtre par issueType ?issueType={string} (aussi si plsr type)
  if (typeof(req.query.issueType) == "object" && req.query.issueType.length) {
    criteria.type = { $in: req.query.issueType };
  } else if (req.query.issueType) {
    criteria.type = req.query.issueType;
  }

  // Filtre par status ?status= (aussi si plsr status)
  if (typeof(req.query.status) == "object" && req.query.format.length) {
    criteria.status = { $in: req.query.status };
  } else if (req.query.status) {
    criteria.status = req.query.status;
  }

  //filtre par tags
  if (typeof(req.query.tag) == "object" && req.query.format.length) {
    criteria.tags = { $in: req.query.tag };
  } else if (req.query.tag) {
    criteria.tags = req.query.tag;
  }

  //  Filtre par startDate ?startDate=
  if (req.query.startDate) {
    criteria.created_at = req.query.startDate;
  }

  //  Filtre par endDate ?endDate=
  if (req.query.endDate) {
    criteria.endDate = req.query.endDate;
  }

  //flitre par user
  if (req.query.userId {
    criteria.user = req query.userId;
  }

  //filtre par zone géographique
  var coordX =req.query.coordX;
  coordY = req.query.coordY;
  radius = req.query.rad;

  if (coordX && coordY && radius){
    criteria.localisation = {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [parseFloat(coordX),parseFloat(coordY)]
        },
        $maxDistance: parseInt(radius, 10)
      }
    }
  }


  Issue.find(criteria, function (err, issues) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(issues);
  });
});
// PUT /api/issues/:id
router.put('/:id', function (req, res, next) {

  var issueId = req.params.id;
  console.log(req.body);

  Issue.findById(issueId, function(err, issue) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!issue) {
      res.status(404).send('Issue not found');
      return;
    }

    if (req.body.name){
      issue.name = req.body.name;
    }

    if (req.body.type){
      issue.type = req.body.type;
    }

    if (req.body.localisation){
      console.log("dans le if de localisation");
      console.log(issue.localisation);
      issue.localistation = req.body.localisation;
    }

    if (req.body.description){
      issue.description = req.body.description;
    }

    if (req.body.photo){
      issue.photo = req.body.photo;
    }

    if (req.body.responsable){
      issue.responsable = req.body.responsable;
    }

    if (req.body.tags){
      issue.tags = req.body.tags;
    }

    issue.pre('save', function(next){
      now = new Date();
      this.updated_at = now;
      if ( !this.created_at ) {
        this.created_at = now;
      }
      next();
    });


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
