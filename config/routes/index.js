
var router = require('express').Router();
// var path = "../"+__dirname + '/views/';
var path = require("path").join(__dirname,'../../views/');

module.exports = router;

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});




