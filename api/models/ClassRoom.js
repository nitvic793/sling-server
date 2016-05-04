"use strict";

/**
 * ClassRoom
 * @description :: Model for storing ClassRoom records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    teacher: {
      model: "User",
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
    students: {
      collection: 'Student',
      via: 'classes'
    },
    
    notices:{
      collection:'NoticeBoard',
      via:'classRoom'
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
