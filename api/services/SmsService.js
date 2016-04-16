var accountSid = 'AC97f23dd5a1343d241f18caf082da6250';
var authToken = 'c8a06491d03e95758b2dfcd7d8910187';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

var SmsService = {
  sendMessage: function sendSms(msg, to, cb){
    client.messages.create({
    	to: to,
    	from: "+14013719074",
    	body: msg,
    }, function(err, message) {
    	 cb(err,message);
    });
  }
};

module.exports = SmsService;
