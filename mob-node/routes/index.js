var express = require('express');
var router = express.Router();

passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: 246524982615658,
    clientSecret: 'a785196bf857d51efeb26d43ca78fed8',
    callbackURL: 'http://localhost:8080/api/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
   console.log("in the main file");
   done(null,profile)
  }
));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Here we are getting mobile items
router.use('/getitems', function(req, res) {
  pool.query('select * from tmobile_items', function(err, result) {
    if (err) {
      console.log("Connected failed", err);
      res.send(err);
    } else {
      console.log("Connection ok");
      res.send(result)
    }
  })
});

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
router.get('/auth/facebook', passport.authenticate('facebook',{scope:['email','public_profile']}));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/auth/facebook/callback',
  passport.authenticate('facebook'),function(req,res,next){
    res.redirect("http://localhost:4200/welcome")
  });


module.exports = router;
