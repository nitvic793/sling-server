/**
* Teachers.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type:"string"
    },
    phoneNumber:{
      type:"string"
    },
    employmentStartDate:{
      type:"datetime"
    },
    terminationDate:{
      type:"datetime"
    },
    employeeNumber:{
      type:"string"
    },
    department:{
      type:"string"
    }
  }
};
