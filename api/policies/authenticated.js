/**
 * api/policies/authenticated.js
 *
 * This example shows how to use the HTTP Basic authentication strategy using the passport-http module.
 * Other strategies (Digest, OAuth, OAuth2, etc) can be similarly implemented.
 *
**/

var passport = require('passport');

/**
 * Allow any authenticated user.
 */
module.exports = function(req, res, ok) {
  // User is allowed, proceed to controller
  passport.authenticate("basic", {session: false}, function(err, user, info) {
    if (err || !user) {
      return res.send("You are not permitted to perform this action.", 403);
    }
    return ok();
  })(req, res, ok);
};
