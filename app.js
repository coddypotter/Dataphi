var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.status(200).json({ message: "Service Live" });
});

app.listen(3000, function () {
    console.log('Express server listening on port 3000');
});