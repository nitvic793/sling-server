/**
 * Parents.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      defaultsTo: uuid.v4()
    },
    relationship: {
      type: "string",
      required: true
    }
  },
  beforeCreate: function(parent, next) {
    parent.id = uuid.v4();
    next();
  }
};
