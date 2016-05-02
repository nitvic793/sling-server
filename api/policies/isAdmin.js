"use strict";

/**
 * isAuthenticated
 * @description :: Policy that injects user in `req` via JSON Web Token and checks if OTP is verified for user
 */

const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', (error, user, info) => {
    if (error || !user) return res.negotiate(error || info);
    var unauthorized = {status:'OTP verification not done'};
    if(!user.otpVerified) return res.unauthorized(unauthorized);
    Admin.findOne({user:user.id})
    .then(function(admin){
      if(!admin){
         return res.unauthorized({status:'You are not an admin'});
      }
      else{
        if((admin.role)!='admin'){
         return res.unauthorized({status:'You are not an admin'});          
        }
        else{
          next();
        }
      }
    })
    .catch(function(err){
      return res.negotiate(err);
    });
    
    req.user = user;

    next();
  })(req, res);
};
