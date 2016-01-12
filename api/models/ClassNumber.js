/**
 * ClassNumbers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
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
    }
  }
};
