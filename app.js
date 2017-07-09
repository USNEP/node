var express = require("express");
var app = express();
var path = __dirname + '/views/';
var router = express.Router();


app.use(require('./config/routes'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});


app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
