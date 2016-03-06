var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Comment = mongoose.model('Comment'),
  User = mongoose.model('User'),
  Issue = mongoose.model('Issue')

module.exports = function (app) {
  app.use('/api/actions', router);
};


/**
*création d'un nouveau comment
*/
// POST /api/actions
router.post('/', checkUser, function(req, res, next) {

  var issue = Issue.findById(req.body.id);

  if(req.body.id)
  {
    var issueId = req.body.id;

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




  issue.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

/**

*/
router.post("/solved", function(req, res, next){


});

/**
requires: une issue, un user qui peut être responsable d'une issue.
*/
router.post("/assigned", function(req,res,netx){

  //check du user et recup du user
  var user = User.findById(req.body.responsableId);
  //check de l'issueet recup de l'issue
  var issue = Issue.findById(req.body.issueId);

  //ajoute le status "assigned", met a jour le "updated_at", note le

});


});
