/**
 * NoticeBoards.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    notice: {
      type: "string",
      required: true
    },
    date: {
      type: "datetime",
      required: true
    },
    cls: {
      model: "Class",
      required: true
    }
  }
};
