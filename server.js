var express = require("express"); 
var app = express();

var PORT  = process.env.PORT || 8080

var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});


app.get('/', function (req, res) {
  res.send('Hello world from Node')
})

app.get('/today', function (req, res) {
  var today = new Date()

  var day = today.getDate()
  var month = today.getMonth()+1
  var year = today.getFullYear()

  var todaysDate = `${month}-${day}-${year}`

  res.send(todaysDate)
})