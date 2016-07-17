var express = require('express');
var app = express();

function firstHandler(req, res, next) {
  console.log('first handler executed.');
  next();
}

function secondHandler(req, res, next) {
  console.log('second handler executed.');
  next();
}
app.all("*", firstHandler);
app.all("*", secondHandler);
app.get('/', function(req, res) {
  console.log('homepage');
  res.send('Homepage');
});
var port = 3000;
app.listen(port, function() {
  console.log('App is listening on port:', port);
});
