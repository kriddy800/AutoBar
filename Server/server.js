var express = require('express');

var app = express();
var gpio = require("pi-gpio");

app.use(express.static('../App'));
app.get('/', function(req, res) {})

app.listen(9091, function() {
    console.log("server running on 9091");

    gpio.open(4, "output", function(err) {
        gpio.write(4, 0, function() {
            gpio.close(4);
        });
    });
});