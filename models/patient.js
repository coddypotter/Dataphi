"use strict";
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define('patient', {
    first_name: {
        type: Sequelize.STRING,
        field: 'first_name' 
    },
    last_name: {
        type: Sequelize.STRING,
        field: 'last_name' 
    },
    age: {
        type: Sequelize.STRING,
        field: 'age'
    },
    dob: {
        type: Sequelize.STRING,
        field: 'dob'
    },
    gender: {
        type: Sequelize.STRING,
        field: 'gender'
    },
    phone: {
        type: Sequelize.STRING,
        field: 'phone'
    },
    free_text: {
        type: Sequelize.STRING,
        field: 'free_text'
    }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });

  return Patient;
};