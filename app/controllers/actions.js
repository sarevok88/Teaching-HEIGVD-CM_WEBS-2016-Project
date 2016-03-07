var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Comment = mongoose.model('Comment'),
  User = mongoose.model('User'),
  Issue = mongoose.model('Issue')

module.exports = function (app) {
  app.use('/api/actions', router);
};

function checkUser(req, res, next) {

  if (!req.body.user._id){
    // If no user ID is given, return an error.
    res.status(400).send('User ID is required');
    return;
  } else if (!mongoose.Types.ObjectId.isValid(req.body.user._id)) {
    // If the user ID is not a valid MongoDB ID, no need to execute a query, return an error directly.
    res.status(400).send('No user with ID ' + req.body.user._id);
    return;
  }
  next();
}

function checkIssue(req, res, next) {
  if (!req.body.issue._id) {
    // If no user ID is given, return an error.
    res.status(400).send('Issue ID is required');
    return;
  } else if (!mongoose.Types.ObjectId.isValid(req.body.issue._id)) {
    // If the issue ID is not a valid MongoDB ID, no need to execute a query, return an error directly.
    res.status(400).send('No issue with ID ' + req.body.issue._id);
    return;
  }
  next();
}

/**
requires: une issue, un user qui peut être responsable d'une issue.
*/
router.post("/assigned", checkUser, checkIssue, function(req,res,netx){
  console.log("dans la route assigned");
  console.log(req.body.issue._id);
  var issue = Issue.findById(req.body.issue._id);
  var responsable = User.findById(req.body.user._id);
  console.log(responsable.nickname);


  //ajoute le status "assigned", met a jour le "updated_at", note le responsable
  var tabStatus = issue.status;

/*
  issue.status = tabStatus + "assigned";
  now = new Date();
  this.updated_at = now;
  */


});

/**
  requires: une issue qui a été assignée, et le user responsable de l'issue doit lancer la requète
*/
router.post("/solved", checkUser, checkIssue, function(req, res, next){

});
