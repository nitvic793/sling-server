/**
 * Students.js
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
    name: {
      type: "string",
      required: true
    },
    dob: {
      type: "datetime",
      required: true
    },
    identificationNumber: {
      type: "string"
    },
    cls: {
      model: "Class"
    },
    classes: {
      collection: "ClassNumber"
    },
    parentInfo: {
      collection: "Parent"
    },
    reviews: {
      collection: "Review"
    }
  },
  beforeCreate: function(student, next) {
    student.id = uuid.v4();
    next();
  }
};
