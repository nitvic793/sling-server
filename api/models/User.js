/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var uuid = require('node-uuid');
var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      defaultsTo: uuid.v4()
    },
    name: {
      type: "string",
      required: true
    },
    phoneNumber: {
      type: "string",
      required: true
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true
    },
    parent: {
      model: "Parent"
    },
    teacher: {
      model: "Teacher"
    }
  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash;
          cb();
        }
      });
    });
  }
};
