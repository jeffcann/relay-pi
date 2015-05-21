var sh = require('execSync');

function turnOn(pin) {
  sh.exec('./turnon.sh ' + pin);
}

function turnOff(pin) {
  sh.exec('./turnoff.sh ' + pin);
}

setTimeout(function() { turnOn(7); }, 500);
setTimeout(function() { turnOff(7); }, 1000);
