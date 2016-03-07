// Model for Issue

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var IssueSchema = new Schema({
  name: String, //
  created_at: Date,
  updated_at: Date,
  solved_at: Date,
  type: {type: String}, //lien avec les types
  tags: [String],
  status: String, //en lien avec les status
  localisation: {type: {type: String}, coordinates: [Number, Number]},
  description: String,
  photo: String,
  action: [String], //ajouter la date de l'action et le responsable de l'action
  responsable: Schema.Types.ObjectId,
  user: Schema.Types.ObjectId,
});

IssueSchema.index({
  localisation: "2dsphere"
});

mongoose.model('Issue', IssueSchema);
