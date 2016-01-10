/**
* Students.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type:"string"
    },
    dob:{
      type:"datetime"
    },
    identificationNumber:{
      type:"string"
    },
    cls:{
      model:"Classes"
    },
    classes:{
      collection:"ClassNumbers"
    },
    parentInfo:{
      collection:"Parents"
    },
    reviews:{
      collection:"Reviews"
    }
  }
};
