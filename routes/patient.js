var express = require('express');
var pg = require('pg');

var router = express.Router();
var models = require("../models/index")
router.post('/create', function (req, res) {
    models.patient.create({
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "age": req.body.age,
        "dob": req.body.don,
        "gender": req.body.gender,
        "phone": req.body.phone,
        "free_text": req.body.free_text

    }).then(function (insertedVal) {
        res.json({ "status": 200, "message": "Patient Created Successfully", "patient": insertedVal.dataValues });
    }).catch(function (error) {
        res.json({ "status": 500, "message": error });
    });
});
router.get('/', function (req, res) {
    models.patient.findAll().then(function (patient) {
        // console.log(members)
        res.json({ "status": 200, "patient": patient });
    }).catch(function (error) {
        res.json({ "status": 500, "message": error });
    });
});

module.exports = router;