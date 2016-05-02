"use strict";

/**
 * Student
 * @description :: Model for storing Student records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
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
    classes: {
      collection: "ClassRoom",
      via: "students"
    },
    parentInfo: {
      collection: "User",
      via: 'wards'
    },
    reviews: {
      collection: "Review"
    },
    
    school:{
      model:'School'  
    },
    
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
