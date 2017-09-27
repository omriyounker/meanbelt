// require mongoose
var mongoose = require('mongoose');
// create the schema
var PollSchema = new mongoose.Schema({
  question:String,
  answers:[],
  answerScore:[],
  answerS1:Number,
  answerS2:Number,
  answerS3:Number,
  answerS4:Number,
  createBy:String,
  created:Date

})
// register the schema as a model
var Poll = mongoose.model('Poll', PollSchema);
