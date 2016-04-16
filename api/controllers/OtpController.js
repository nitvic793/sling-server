/**
 * OtpController
 *
 * @description :: Server-side logic for managing Otps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	generateOtp: function(req,res){
		var to = req.param('to');
		var userId = req.param('user');
		var message = Math.floor((Math.random() * 1000) + 1000)+'';
		User.findOne({id:userId}).exec(function(err,data){
			if(!err && data!=null && data.phoneNumber !=null){
				Otp.create({otp:message,user:userId}).exec(function(error,otp){
					if(!error){
						SmsService.sendMessage(message,data.phoneNumber, (err, smsId)=>{
							if(!err){
								return res.ok({status:'OTP sent'});
							}
							else {
								return res.serverError({status:err});
							}
						});
					}
					else{
						return res.serverError({status:'DB error',message:error});
					}
				});
			}
			else{
				return res.serverError({status:'Could not find user/Phone Number'});
			}
		});
	},

	verify: function(req,res){
		var otp = req.param('otp');
		var userId = req.param('user');
		Otp.findOne({user:userId}).exec(function(err,otpData){
			if(!err && otpData!=null){
				console.log(otpData.otp, otp);
				if(otp==otpData.otp){
					User.update({id:userId}, {otpVerificationDone:true}).exec(function(error, user){
						if(!error){
							Otp.destroy({id:otpData.id}).exec(function(errOtp){
								if(!errOtp){
									return res.ok({status:'OTP verified'});
								}
								else{
									return res.serverError({status:'DB Error'});
								}
							});
						}
						else {
							return res.serverError({status:'DB Error'});
						}
					});
				}
				else return res.badRequest({status:'Failed to verify OTP'});
			}
			else{
				return res.badRequest({status:'Could not find User in OTP list'});
			}
		});
	}
};
