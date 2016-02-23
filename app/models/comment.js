// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CommentSchema = new Schema({
  authorId: Schema.Types.ObjectId,
  commentId: Schema.Types.ObjectId,
  text: String
});

CommentSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Comment', CommentSchema);
