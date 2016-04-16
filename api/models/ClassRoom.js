/**
 * ClassRoom.js
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
    teacher: {
      model: "Teacher",
      required: true
    },
    subject: {
      type: "string",
      required: true
    },
    deprecationDate: {
      type: "datetime"
    },
    room: {
      type: "string"
    },
    students:{
      collection:'Student',
      via:'classes'
    }
  },
  beforeCreate: function(classRoom, next) {
    classRoom.id = uuid.v4();
    next();
  }
};