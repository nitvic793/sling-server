module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    if (req.user.role == 0) {
      return next();
    }
  }

  return res.redirect('/clippings');
};
