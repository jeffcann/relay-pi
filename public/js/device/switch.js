function turnOn(pin) {
    $.get("/switch/" + pin + "/on");
}

function turnOff(pin) {
    $.get("/switch/" + pin + "/off");
}