module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
        return next();
   } else {
        // TODO: Point this to the route for Login. Just a placeholder for now
        return res.redirect('/login');
   }
};
