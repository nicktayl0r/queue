const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//
const User = require('./../models/User');

/* 
    serializeUser is a method that determines which data should be stored in the users session
*/
passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(function(id, done){
    User.findById(id)
    .then(function(user){
        done(null, user);
    })
    .catch(function(err) {
        done(err, null);
    })
})

/* 

    Sign in with email and password 

*/

passport.use(new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
    User.findOne({ email })
    .then(function(user) {

        if (!user) {
            return done(null, false, { msg: `The email address ${email} is not associated with an account. Double check your email address and try again.`})
        }

        user.comparePassword(password, function(err, isMatch) {
            if (!isMatch) {
                return done(null, false, { msg: 'Invalid email or password' })
            }
            return done(null, user)
        })
    })
    .catch(function(err) {
        // TODO: Add better error handling here
        console.log(err);
    })
}))

