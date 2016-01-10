/**
* NoticeBoards.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    notice:{
      type:"string"
    },
    date:{
      type:"datetime"
    },
    cls:{
      model:"Classes"
    }
  }
};
