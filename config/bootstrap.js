"use strict";

/**
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 * @param {Function} cb This function should always be called, so DON'T REMOVE IT
 */

module.exports = {
  bootstrap: cb => {
    User.findOne({username:'root'}).exec(function(err,data){
      console.log(data);
      if(!data){
        User.create({username:'root',password:'IamRoot', email:'nithishvictor@gmail.com', phoneNumber:'9731842165', otpVerified:true})
        .exec(function(err,data){
          Admin.create({role:'admin',user:data.id});
          sails.log.info('Root user created', err); 
          User.findOne({username:'root'}).exec((err,data)=>console.log(err,data));         
        });
      }
      else{
        sails.log.info('Root user found');
      }
      if(err){
        sails.log.error('Could not set root user');
      }
    });
    cb();
  }
};
