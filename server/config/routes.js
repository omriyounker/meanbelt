var mongoose = require('mongoose');
var path = require("path");
var Poll = mongoose.model('Poll');
module.exports = function(app) {
  app.get('/getpolls', function(req, res){
    console.log("got to routes getpolls");
    Poll.find({}, function(err, polls) {
      if(err){
        console.log("wrong in find");
      }else{
        console.log("got the polls!");
        res.status(200).json(polls);
      }
    })
  })//same for post/put/delete
  app.post('/create', function(req, res, next){
    console.log("got to the routes.js add poll");
    var poll = new Poll({});
    poll.question = req.body.question;
    poll.answers = req.body.answers;
    poll.answerScore = [0,0,0,0];
    poll.answerS1 = 0;
    poll.answerS2 = 0;
    poll.answerS3 = 0;
    poll.answerS4 = 0;
    console.log("scores next...");
    console.log(poll.answerScore);
    poll.createBy = req.body.createBy;
    poll.created = req.body.created;
    poll.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        console.log("saved a poll!");
        Poll.find({}, function(err, polls) {
          if(err){
            console.log("wrong in find");
          }else{
            res.status(200).json(polls);
          }
        })
      }
    })
  })

  app.post('/update', function(req, res, next){
    var pollin = new Poll(req.body);
    console.log("got to update section");
    Poll.findOne({_id : pollin._id}, function(err, poll){
      poll.answerScore = req.body.answerScore;
      poll.answerS1 = req.body.answerScore[0];
      poll.answerS2 = req.body.answerScore[1];
      poll.answerS3 = req.body.answerScore[2];
      poll.answerS4 = req.body.answerScore[3];
      console.log("before saving");
      poll.save(function(err) {
        if(err){console.log(err);}
        else{
          Poll.find({}, function(err, polls) {
            if(err){
              console.log("wrong in find");
            }else{
              console.log("this is the one poll!");
              console.log(poll);
              console.log("this is the list of polls!");
              console.log(polls);
              res.status(200).json(polls);
            }
          })
        }
      })

    })
  })

  app.delete('/delete/:id', function(req, res, next){
    console.log("got into delete");
    Poll.remove({_id:req.params.id}, function(err){
      Poll.find({}, function(err, polls) {
        if(err){
          console.log("wrong in find");
        }else{
          console.log("got the polls after delete!");
          res.status(200).json(polls);
        }
      })
    })
  })
  app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
