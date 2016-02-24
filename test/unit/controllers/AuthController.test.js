var request = require('supertest');

describe('AuthController', function() {

  describe('#login()', function() {
    it('Should return user data', function (done) {
      var user = {phone:"ABC", password:"123456"};
      request(sails.hooks.http.app)
        .post('/login')
        .send(user)
        .expect(200, done);
    });
  });

});
