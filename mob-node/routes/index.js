var express = require('express');
var router = express.Router();

var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Here we are getting mobile items
router.use('/getitems',function(req,res){
  pool.query('select * from tmobile_items',function(err,result){
    if(err){
      console.log("Connected failed",err);
      res.send(err);
    }else{
      console.log("Connection ok");
      res.send(result)
    }
  })
});




module.exports = router;
