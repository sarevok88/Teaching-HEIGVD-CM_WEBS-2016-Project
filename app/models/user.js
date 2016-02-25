// User Model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  forname: String,
  surname: String,
  nickname: String,
  dob: Date,
  email: String,
  roles: [String] //comme les roles peuvent être multiple, on a un tableau de roles.
});

UserSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);
