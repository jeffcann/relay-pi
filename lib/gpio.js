var gpio = require("pi-gpio");

var pins = [16, 18];

function open(pin, callback) {
  console.log("opening pin " + pin);

  gpio.open(pin, "output", function(err) {
    if(err) {
      console.log("could not open gpio " + pin);
    } else {
      callback();
    }
  });
}

function close(pin) {
  gpio.close(pin);
}

function init() {
  for(var idx in pins) {
    var pin = pins[idx];
    open(pin, function() { 
      setInterval(function() { blink(pin); }, 2000);
    });
  }
}

function turnOn(pin, callback) {
  console.log("turn on pin " + pin);
  gpio.open(pin, "output", callback);
//  gpio.write(pin, 1, callback);
}

function turnOff(pin, callback) {
  console.log("turn off pin " + pin);
  gpio.open(pin, "input", callback);
//  gpio.write(pin, 0, callback);
}

function blink(pin, callback) {
  console.log("blink pin " + pin);

  turnOn(pin, function(err) {
    if(err) {
      console.log(err);
    } else {
      setTimeout(function() { 
        turnOff(pin, callback);
      }, 1000);
    }
  });
}

process.on('exit', function() {
  for(var idx in pins) {
    console.log("closing pin " + pins[idx]);
    close(pins[idx]);
  }  
});

init();


