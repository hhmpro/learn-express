var express = require('express');

var app = express(); // the main app
var admin = express(); // the sub app

admin.get('/', function(req, res) {
  console.log('admin.mountpath:', admin.mountpath); //admin
  res.send('Admin Homepage');
});

app.use('/admin', admin); // mount the sub app

var port = 3000;
app.listen(port, function() {
  console.log('app listening on port: ' + port);
});
