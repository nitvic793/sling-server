"use strict";

/**
 * Teacher
 * @description :: Model for storing Teacher records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    employmentStartDate: {
      type: "datetime",
      required: true
    },
    terminationDate: {
      type: "datetime"
    },
    employeeNumber: {
      type: "string"
    },
    department: {
      type: "string"
    },

    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
