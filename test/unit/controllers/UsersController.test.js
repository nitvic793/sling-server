var request = require('supertest');

describe('UsersController', function() {

  describe('#test()', function() {
    it('should return ok', function (done) {
      request(sails.hooks.http.app)
        .get('/users/test')
        .expect(200, done);      
    });
  });

});
