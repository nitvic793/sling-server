"use strict";

/**
 * Otp
 * @description :: Model for storing Otp records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    otp:{
      type:'string',
      required:true
    },
    
    phoneNumber:{
      type:'string',
      required:true,
      unique:true
    },
    
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
