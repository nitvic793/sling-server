module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    if (req.user.role == 0) {
      return next();
    }
  }

  // TODO: Point this to the home route after login. Just a placeholder for now
  return res.redirect('/home');
};
