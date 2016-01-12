/**
 * Reviews.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      defaultsTo: uuid.v4()
    },
    review: {
      type: "string",
      required: true
    },
    classNumber: {
      model: "ClassNumber",
      required: true
    },
    student: {
      model: "Student",
      required: true
    }
  },
  beforeCreate: function(review, next) {
    review.id = uuid.v4();
    next();
  }
};
