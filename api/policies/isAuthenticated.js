"use strict";

/**
 * isAuthenticated
 * @description :: Policy that injects user in `req` via JSON Web Token and checks if OTP is verified for user
 */

const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', (error, user, info) => {
    if (error || !user) return res.negotiate(error || info);
    if(!user.otpVerified) return res.unauthorized({status:'OTP verification not done'});
    req.user = user;

    next();
  })(req, res);
};
