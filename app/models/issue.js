// Model for Issue

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var IssueSchema = new Schema({
  name: String,
  type: String, //lien avec les types
  statut: String, //en lien avec les status
  localisation: Number,
  description: String,
  photo: String,
  responsable: Schema.Types.ObjectId,
  authorId: Schema.Types.ObjectId,
});

IssueSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Issue', IssueSchema);
