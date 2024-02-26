// File where we can configure our passport strategies (login in with google, login with facebook, etc.... are all strategies)
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const UserModel = require("../models/user");

// this function middleware will be called everytime a USER LOG's in
passport.use(
  new GoogleStrategy(
    // Configuration object, we need to tell google its our app!
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    // The verify callback function (Gets called everytime a user logs in!)
    async function (accessToken, refreshToken, profile, cb) {
      //< - information we want is in the profile object
      // a user has logged in with OAuth...

      // Search the database for users profile
      // if we find a user with a profile.id that matches a users googleId
   
      let user = await UserModel.findOne({googleId: profile.id});
       if (user) return cb(null, user)
      try {
        user = await UserModel.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value
        })

        cb(null, user) 
      } catch (err) {
        return cb(err);
      }
    }
  )
);


passport.serializeUser(function(user, cb){ 
  cb(null, user._id)
});



passport.deserializeUser(async function(userId, cb){
	try {
    const userDoc = await UserModel.findById(userId)
    cb(null, userDoc); 

  } catch(err){
    cb(err)
  }
})