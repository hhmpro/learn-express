var express = require('express');

var app = express(); // the main app
var admin = express(); // the sub app

admin.get('/', function(req, res) {
  console.log('admin.mountpath:', admin.mountpath); // ['/adm*n','/manager']
  res.send('Admin Homepage');
});

var secret = express();
secret.get('/', function(req, res) {
  console.log('secret.mountpath:', secret.mountpath); // /secr*t
});

admin.use('/secr*t', secret);

app.use(['/adm*n', '/manager'], admin); // mount the sub app

var port = 3000;
app.listen(port, function() {
  console.log('app listening on port: ' + port);
});
