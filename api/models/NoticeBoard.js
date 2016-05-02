"use strict";

/**
 * NoticeBoard
 * @description :: Model for storing NoticeBoard records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    title: {
      type: "string"
    },
    notice: {
      type: "string",
      required: true
    },
    date: {
      type: "datetime",
      required: true
    },
    classRoom: {
      model: "ClassRoom",
      required: true
    },
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
