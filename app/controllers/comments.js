var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Comment = mongoose.model('Comment'),
  User = mongoose.model('User'),
  Issue = mongoose.model('Issue')

module.exports = function (app) {
  app.use('/api/comments', router);
};

/**
 * Middleware qui vérifie l'existence d'un user
 */
function checkUser(req, res, next) {
  if (!req.body.authorId) {
    // If no user ID is given, return an error.
    res.status(400).send('User ID is required');
    return;
  } else if (!mongoose.Types.ObjectId.isValid(req.body.authorId)) {
    // If the user ID is not a valid MongoDB ID, no need to execute a query, return an error directly.
    res.status(400).send('No user with ID ' + req.body.authorId);
    return;
  }
  next();
}


/**
*vérifie l'existence d'une Issue
*/
function checkIssue(req, res, next) {
  if (!req.body.issueId) {
    // If no issue ID is given, return an error.
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
*création d'un nouveau Comment 
*/
// POST /api/comments
router.post('/', checkUser, function(req, res, next) {

  var comment = new Comment(req.body);

  comment.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

  comment.save(function (err, createdComment) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(createdComment);
  });
});


/**
* GET /api/comments
* si pas de param, recupération de tous les comments, sinon recup des comments d'après les param
*/

router.get('/', function (req, res, next) {
 console.log(req.query);
  var criteria = {};

  //Filtre par Id d'Issue
  if (req.query.issueId) {
    criteria.issue = req.query.issueId;
  }

  Comment.find(criteria, function (err, comments) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(comments);
  });
});

/**
*récupération d'un comment via son ID
*/
// GET /api/comments/:id
router.get('/:id', function (req, res, next) {

  var commentId = req.params.id;

  Comment.findById(commentId, function(err, comment) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!comment) {
      res.status(404).send('Comment not found');
      return;
    }

    res.send(comment);
  });
});

/**
*/
// PUT /api/comments/:id
router.put('/:id', function (req, res, next) {

  var commentId = req.params.id;

  Comment.findById(commentId, function(err, comment) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!comment) {
      res.status(404).send('Comment not found');
      return;
    }

    if (req.body.text){
      comment.text = req.body.text;
    }

    if (req.body.authorId){
      comment.authorId = req.body.authorId;
    }
    if (req.body.commentId){
      comment.commentId = req.body.commentId;
    }

    
    comment.save(function(err, updatedComment) {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.send(updatedComment);
    });
  });
});

// DELETE /api/comments/:id
router.delete('/:id', function (req, res, next) {

  var commentId = req.params.id;

  Comment.remove({
    _id: commentId
  }, function(err, data) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    console.log('Deleted ' + data + ' comments');
    res.sendStatus(204);
  });
});
