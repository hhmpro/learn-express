var express = require('express');

var app = express(); // the main app
var admin = express(); // the sub app

admin.get('/', function(req, res) {
  console.log('admin.mountpath:', admin.mountpath); // ['/adm*n','/manager']
  res.send('Admin Homepage');
});
admin.on('mount', function(parent) {
  console.log('Admin mounted, parent is:', parent);
});

var secret = express();
secret.get('/', function(req, res) {
  console.log('secret.mountpath:', secret.mountpath); // /secr*t
  res.send('Secret Page'); // 必须调用res.send()方法，页面才不会一直加载
});
secret.on('mount', function(parent) {
  console.log('Secret mounted, parent is:', parent);
});


var salary = express();
salary.get('/', function(req, res) {
  console.log('salary.mountpath:', salary.mountpath); // [ '/salary', '/money' ]
  res.send('Salary Page');
});
salary.on('mount', function(parent) {
  console.log('Salary mounted, parent is:', parent);
});

secret.use(['/salary', '/money'], salary);

admin.use('/secr*t', secret);

app.use(['/adm*n', '/manager'], admin); // mount the sub app

var port = 3000;
app.listen(port, function() {
  console.log('app listening on port: ' + port);
});

// Salary mounted, parent is: function(req, res, next) {
//   app.handle(req, res, next);
// }
// Secret mounted, parent is: function(req, res, next) {
//   app.handle(req, res, next);
// }
// Admin mounted, parent is: function(req, res, next) {
//   app.handle(req, res, next);
// }
