var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('hello world');
});
var port = 3000;
app.listen(port, function(err) {
  console.log('app listening on port:' + port);
});
