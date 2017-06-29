
var friendObject = require('../data/friend.js');


module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendObject);
  });

  