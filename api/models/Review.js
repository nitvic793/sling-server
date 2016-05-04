"use strict";

/**
 * Review
 * @description :: Model for storing Review records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    review: {
      type: "string",
      required: true
    },
    classRoom: {
      model: "ClassRoom",
      required: true
    },
    
    student: {
      model: "Student",
      required: true
    }, 
    
    teacher:{
      model:'User'
    },
    
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
