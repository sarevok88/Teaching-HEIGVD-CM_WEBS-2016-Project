// Model for Issue

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var IssueSchema = new Schema({
  name: String,
  type: String, //lien avec les types
  tags: String,
  status: String, //en lien avec les status
  localisation: {type: {type: String}, coordinates: [Number, Number]},
  description: String,
  photo: String,
  responsable: Schema.Types.ObjectId,
  user: Schema.Types.ObjectId,
});

IssueSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Issue', IssueSchema);
