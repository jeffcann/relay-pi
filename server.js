var sh = require('execSync');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/switch/:pin/:state', function(req, res) {
  var pin = req.params.pin;
  var state = (req.params.state == 'on');

  if(state === true) {
    sh.exec('./turnon.sh ' + pin);
    res.send({status:'ok', pin:pin, state:'on'});
  } else {
    sh.exec('./turnoff.sh ' + pin);
    res.send({status:'ok', pin:pin, state:'off'});
  }
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Controller app listening at http://%s:%s', host, port);
});
