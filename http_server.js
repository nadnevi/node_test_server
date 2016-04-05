var express = require('express');
var app = express();

// Enable url and json encoded bodies
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.use(bodyParser.json()); // parse application/json 

// Enable cookie parsing
var cookieParser = require('cookie-parser') // Cookie parser to fetch cookies
app.use(cookieParser())

app.all('*', function (req, res) {
  console.log('');
  console.log('**********', new Date(), '**********');
  console.log(req.method, 'request to', req.path);
  console.log('req.headers =', req.headers);
  console.log('req.cookies =', req.cookies);
  console.log('req.params =', req.params);
  console.log('req.query =', req.query);
  console.log('req.body =', req.body);
  console.log('*************************************************************');
  res.send({'message' : req.method + ' request to ' + req.path + ' successful'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
