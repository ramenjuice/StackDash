var https = require('https');
var fs = require('fs');
var zlib = require('zlib');
var request = require('request');
var theToken = 'W8qw9IuFVpWr1hAx7F5qUA))';
var theKey = 'XC9SA)tZxquHxp0w15gXhQ((';
var authy = 'key='+theKey
var taskList;
var users;
var quest;





var qOptions = {
  url: 'https://api.stackexchange.com/2.2/questions/unanswered/?'+ authy+'&order=desc&sort=activity&tagged=paypal&site=stackoverflow',
  writeFile: "./src/stackData/quest.json",
}


var userOptions = {
  url: 'https://api.stackexchange.com/2.2/users/5120487%3B5071277%3B3532068%3B5120477%3B3532096%3B5120499%3B3533169%3B3532140%3B3557122%3B5120461?'+authy+'&order=desc&sort=reputation&site=stackoverflow',
  writeFile: "./src/stackData/users.json",
}

module.exports = function Stack() {

  this.getstackData = function (endCallback){
      stackReq(userOptions,function (u) {
        users = u;
        stackReq(qOptions, function (q) {
          quest = q;
          endCallback(users,quest);
          });
      });
  }
}

  function stackReq(options, callback){
    var unzipData;
    /////
    console.log("getting stuff from clientReq");
    //add auth here
   ///https.get({url : options.url,  token : theToken });
   debugger;
    var clientReq = request.get({url : options.url });

    clientReq.on('error', function(e) {
    console.log('problem with request: ' + e.message);
    //TODO redirect to error page
    });


    clientReq.on('response', function serverDataIn(data) {
      console.log("a response!!!");

      var unziped = zlib.createGunzip();
      data.pipe(unziped);

      unziped.on('error', function(e) {
      console.log('problem with request: ' + e.message);
      //TODO redirect to error page
      });

      unziped.on('data',function (data){
        console.log("data onZipping ");
        unzipData += data;
      });

      unziped.on("end", function() {
        console.log('Doneunziping');
        return callback(unzipData);
      });
    });
}
