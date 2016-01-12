/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login: function(req, res) {

    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        console.log({
          message: info,
          user: user
        });
        return res.redirect("/login");
      }
      req.logIn(user, function(err) {
        if (err) res.redirect("/login");

        // TODO: Fetch the all the user accounts here (Teacher/Parent) and merge info
        return res.redirect("/home")
      });

    })(req, res);
  },

  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  }
};
