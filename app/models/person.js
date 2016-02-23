// Person Model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PersonSchema = new Schema({
  title: String,
  url: String,
  text: String
});



mongoose.model('Person', PersonSchema);
