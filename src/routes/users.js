var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;







// ///TODO add better error handling
//
// var express = require('express');
// var router = express.Router();
// var userModel = require();
// /* GET users listing. */
// router.get('/', function findAll(req, res, next) {
//   userModel.findAll(function onFound(err, users) {
//     if (err){
//       console.log(err);
//       res.send(500);
//     }else{
//       res.render('users',{users:users})
//     }
//   });
// });
//
// router.post('/create', function addUser(req,res,next) {
//   userModel.addUser(req.body.content, function onAdded(err,user) {
//     if(!err){
//       ////TODO:test this url
//       return res.redirect('/');
//     }
//     res.send(500);
//   });
// });
//
// router.get('/edit/:id', function editUser(req, res, next) {
//   userModel.findAll(function onFound(err, users) {
//     if(!err){
//       return res.render('edit',{users:users, current: req.params.id});
//     }
//     res.send(500);
//   });
// });
//
// app.post('/udpate/:id', function updateUser(req,res,next) {
//   userModel.updateUser(req.params.id, req.body.content, function onUpdated(err) {
//     if(!err){
//       return res.redirect('/');
//     }
//   });
// });
//
//
// ///TODO add a delete route
// /*
// load data
// get all
// get one
// add one
// update one
// delete one
//
//
// */
//
//
//
//
// module.exports = router;
