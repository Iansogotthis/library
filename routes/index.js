const router = require('express').Router();
const passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res, next) {
  res.render('index') 
 });

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
	'google',
	{
	  successRedirect: '/', // what route do you want to redirect if the login was success
	  failureRedirect: '/' // what route do you want to redirect to if the login failed, its your choice!
	}
  ))
  

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(){ //< - req.logout comes from passport, and what it does is destorys the cookie keeping track of the user!
    res.redirect('/') // <---- UPDATE THIS TO WHERE YOU WANT THE USER TO GO AFTER LOGOUT
  })
})

module.exports = router;
