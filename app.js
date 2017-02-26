var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var models = require('./models');
var app = express();
var patientRouter = require('./routes/patient');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/patient/', patientRouter);
app.get('/', function (req, res) {
  res.status(200).json({ message: "Service Live" });
});

models.sequelize.sync().then(function () {
  app.set('port', (process.env.PORT || 5000));
  app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
  });
});
