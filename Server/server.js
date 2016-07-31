var express = require('express'),
    path = require('path');

var app = express();

//TODO serve css

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../App', 'index.html'));
})

app.listen(9091);