var express = require('express');
var router = express.Router();
var https = require('https');
var fs = require('fs');
var zlib = require('zlib');
var stack = require('../lib/stack.js');
var async = require('async');

var stackReq = new stack();



// var stackReq = require('../lib/stack.js').request;

/* GET home page. */
router.get('/', function(req, res, next) {
//


  function displayPage(userList, questList){

    zHey = JSON.parse(userList.substring(9));
    zHeyy = JSON.parse(questList.substring(9));


    // console.log(typeof zHey);
    // console.dir(zHey);

    res.render('index', { title: 'Stack Dashboard',
                          users: zHey,
                          questions: zHeyy,
                          testMode: 'Off'});
  }


stackReq.getstackData(displayPage);
});



module.exports = router;


/*
load


get page
go to stack and get stack data
get stack users




*/
