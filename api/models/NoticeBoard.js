/**
 * NoticeBoards.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var uuid = require('node-uuid');

module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      defaultsTo: uuid.v4()
    },
    title:{
      type:"string"
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
    }
  },
  beforeCreate: function(noticeBoard, next) {
    noticeBoard.id = uuid.v4();
    next();
  }
};
