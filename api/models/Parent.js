"use strict";

/**
 * Parent
 * @description :: Model for storing Parent records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    relationship: {
      type: "string",
      required: true
    },
    wards: {
      collection: 'Student',
      via: 'parentInfo'
    },
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
