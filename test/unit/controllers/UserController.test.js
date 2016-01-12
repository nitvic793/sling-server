var request = require('supertest');

describe('UserController', function() {

  describe('#test()', function() {
    it('should return ok', function (done) {
      request(sails.hooks.http.app)
        .get('/user/test')
        .expect(200, done);      
    });
  });

});
