"use strict";

/**
 * School
 * @description :: Model for storing School records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    name:{
      type:'string',
      required:true
    },
    
    address:{
      type:'string'
    },
    
    city:{
      type:'string'
    },    
    
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
