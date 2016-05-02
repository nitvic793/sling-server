"use strict";

/**
 * Admin
 * @description :: Model for storing Admin records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    role:{
      type:'string'
    },
    user:{
      model:'User'
    },
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
