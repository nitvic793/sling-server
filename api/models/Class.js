/**
 * Classes.js
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
    // This makes more sense than Grade and Section. In a school this can be something like "10-B" and
    // in a tuition center, it can be something like "Math-101"
    name: {
      type: "string"
    },
    teacher: {
      model: "Teacher",
      required: true
    }
  },
  beforeCreate: function(class1, next) {
    class1.id = uuid.v4();
    next();
  }
};
