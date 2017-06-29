
var friendObject = require('../data/friends.js');


module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendList array
    var scoreArr = [];
    var friendScore = req.body.scores;
    var friendCount = 0;
    var bestFrand = 0;

    for(var i = 0; i < friendList.length; i++){
    	var difference = 0;
    	for(var j = 0; j < friendScore.length; j++){
    		difference = difference + (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(friendScore[j])));
    	}
    	scoreArr.push(difference);
    };

    for(var i = 0; i < scoreArr.length; i++){
    	if(scoreArr[i] == scoreArr[bestFrand]){
    		bestFrand = i;
    	}
    };

    var match = friendList[bestFrand];
    res.json(match);

    friendList.push(req.body);
   });
 };