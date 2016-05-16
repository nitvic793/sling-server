"use strict";

/**
 * User
 * @description :: Model for storing users
 */

module.exports = {
  schema: true,

  attributes: {
    username: {
      type: 'string',
      unique: true,
    },
    
    otpVerified:{
      type:'boolean',
      defaultsTo:false
    },
    
    password: {
      type: 'string'
    },

    email: {
      type: 'email',
      required: true,
      unique: true
    },
    
    phoneNumber:{
      type:'string',
      required:true,
      unique: true
    },

    firstName: {
      type: 'string',
      defaultsTo: ''
    },

    lastName: {
      type: 'string',
      defaultsTo: ''
    },

    photo: {
      type: 'string',
      defaultsTo: '',
      url: true
    },

    socialProfiles: {
      type: 'object',
      defaultsTo: {}
    },
    
    teacher:{
      model:'Teacher'
    },
    
    parent:{
      model:'Parent'
    },
    
    quickbloxId:{
      type:'string'
    },
    
    approved:{
      type:'boolean',
      defaultsTo: false
    },
    
    isParent:{
      type:'boolean',
      defaultsTo: false      
    },
    
    isTeacher:{
      type:'boolean',
      defaultsTo:false
    },
    
    employmentStartDate: {
      type: "datetime",
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
    relationship: {
      type: "string",
    },
    wards: {
      collection: 'Student',
      via: 'parentInfo'
    },
    
    classes:{
      collection:'ClassRoom',
      via:'teacher'
    },
    
    school:{
      model:'School'
    },

    toJSON() {
      let obj = this.toObject();

      delete obj.password;
      delete obj.socialProfiles;

      return obj;
    }
  },

  beforeUpdate(values, next) {
    if (false === values.hasOwnProperty('password')) return next();
    if (/^\$2[aby]\$[0-9]{2}\$.{53}$/.test(values.password)) return next();

    return HashService.bcrypt.hash(values.password)
      .then(hash => {
        values.password = hash;
        next();
      })
      .catch(next);
  },

  beforeCreate(values, next) {
    if (false === values.hasOwnProperty('password')) return next();

    return HashService.bcrypt.hash(values.password)
      .then(hash => {
        values.password = hash;
        next();
      })
      .catch(next);
  }
};
