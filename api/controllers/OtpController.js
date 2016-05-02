"use strict";

/**
 * OtpController
 * @description :: Server-side logic for ...
 */

module.exports = {

    generateOtp: function (req, res) {
        var phoneNumber = req.param('phoneNumber');
        if (!phoneNumber) {
            return res.badRequest({ status: 'Parameter missing' });
        }
        var otp = Math.floor((Math.random() * 10000)) + '';
        User.findOne({ phoneNumber: phoneNumber })
            .then(function (user) {
                if (!user) {
                    throw new Error('No user found with given phone number');
                }
                else {
                    return Otp.findOne({ phoneNumber: phoneNumber });
                }
            })
            .then(function (otpObj) {
                if (otpObj) {
                    return Otp.update({ phoneNumber: phoneNumber }, { otp: otp });
                }
                else {
                    return Otp.create({ otp: otp, phoneNumber: phoneNumber });
                }
            })
            .then(function (otpObj) {
                SmsService.sendMessage(otp, '+91'+phoneNumber, function(err,message){
                   if(!err){
                       return res.ok({status:'OTP sent'});
                   } 
                   else res.serverError({status:'Could not send OTP'});
                });                
            })
            .catch(function (err) {
                console.error(err);
                return res.serverError(err);
            });
    },

    verify: function (req, res) {
        var phoneNumber = req.param('phoneNumber');
        var otp = req.param('otp');
        if (!otp || !phoneNumber) {
            return res.badRequest({ status: 'Parameters missing' });
        }
        console.log(otp,phoneNumber);
        Otp.findOne({ phoneNumber: phoneNumber, otp: otp })
            .then(function (otpObj) {
                if (!otpObj) {
                    throw new Error('Could not verify OTP');
                }
                else {
                    return User.update({ phoneNumber: phoneNumber }, { otpVerified: true });
                }
            })
            .then(function (user) {
                return [Otp.destroy({phoneNumber:phoneNumber}), user];                
            })
            .spread(function(otpObj, user){
                return res.ok({
                    token: CipherService.jwt.encodeSync({ id: user.id }),
                    user: user
                });
            })
            .catch(function (err) {
                return res.serverError({ status: 'Error in verifying OTP', error: err });
            });
    }
};
