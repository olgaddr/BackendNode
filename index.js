/*var express = require('express');
var app = express();
app.get('/', function (req, res) {
 res.send('Hello, World');
});
app.get('/tere', function (req, res) {
    res.send('Tere, Maailm');
  });
app.listen(8000);*/

var express = require('express');
var app=express();
var PORT = process.env.PORT || 3000;
var apiController=require('./controllers/apiController');
apiController(app);
app.listen(PORT);
