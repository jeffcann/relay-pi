var f = require('fs');

exports.init = function() {
    [0, 1, 4, 7, 8, 9, 10, 11, 14, 15, 17, 18, 21, 22, 23, 24, 25].forEach(exports.initPin);
};

exports.initPin = function(pin) {
    if(!exports.isPinOpen(pin)) {
        exports.openPin(pin);
        exports.setPinDirectionOut(pin);
        exports.turnOff(pin);
    }
};

exports.turnOn = function(pin) {
    exports.writePin(pin, 1);
};

exports.turnOff = function(pin) {
    exports.writePin(pin, 0);
};

exports.writePin = function(pin, value) {
    f.writeFileSync('/sys/class/gpio/gpio' + pin + '/value', value);
};

exports.readPin = function(pin) {
    return f.readFileSync('/sys/class/gpio/gpio' + pin + '/value');
};

exports.isPinOpen = function(pin) {
    return f.existsSync('/sys/class/gpio/gpio' + pin);
};

exports.setPinDirectionOut = function(pin) {
    f.writeFileSync('/sys/class/gpio/gpio' + pin + '/direction', 'out');
};

exports.setPinDirectionIn = function(pin) {
    f.writeFileSync('/sys/class/gpio/gpio' + pin + '/direction', 'in');
};

exports.openPin = function(pin) {
    f.writeFileSync('/sys/class/gpio/export', pin);
};

exports.closePin = function(pin) {
    f.writeFileSync('/sys/class/gpio/unexport', pin);
};
