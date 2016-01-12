/**
 * Classes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    // This makes more sense than Grade and Section. In a school this can be something like "10-B" and
    // in a tuition center, it can be something like "Math-101"
    name: {
      type: "string"
    },
    teacher: {
      model: "Teacher",
      required: true
    }
  }
};
