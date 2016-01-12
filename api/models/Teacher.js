/**
 * Teachers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var uuid = require('node-uuid');

module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      defaultsTo: uuid.v4()
    },
    employmentStartDate: {
      type: "datetime",
      required: true
    },
    terminationDate: {
      type: "datetime"
    },
    employeeNumber: {
      type: "string"
    },
    department: {
      type: "string"
    }
  },
  beforeCreate: function(teacher, next) {
    teacher.id = uuid.v4();
    next();
  }
};
