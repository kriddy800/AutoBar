var express = require('express');

var app = express();

app.use(express.static('../App'));
app.get('/', function(req, res) {
})

app.listen(9091);