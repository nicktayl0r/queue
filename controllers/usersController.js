const User = require('./../models/User');
const passport = require('passport');

/*
    GET '/' view
*/
exports.handleRoot = function(req, res) {
    if (req.user) {
        return res.redirect('/challenges')
    }
    res.render('./account/login');

}

/*
    GET '/login' page
*/
exports.login = function(req, res) {
    res.render('./account/login');

}

/* 
    POST a request to log in
*/
exports.postLogin = function(req, res) {
    passport.authenticate('local', function(req, res) {
       if (err) { return next(err) } 
       if (!user) {
           req.flash('errors', info.message);
           return res.redirect('/login');
       }
       req.logIn(user, function(err) {
           if (err) { return next(err); }
           req.flash('success', { msg: 'Success! You are logged in!' });
           res.redirect(req.session.returnTo || '/');
       });
    })(req, res, next)
}

exports.signup = function(req, res) {
    res.render('./account/signup');
}

exports.postSignup = function(req, res) {
    
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    User.findOne({ email: req.body.email })
    .then(function(existingUser) {
        if (existingUser) {
            req.flash('errors', { msg: 'Account with that email address that already exists.' })
            return res.redirect('/signup');
        }

        const saved = user.save()
        saved.then(function(err) {
            if (err) { return next(err) }
            req.login(user, function(err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            })
        })
        
    })
    .catch(function(err) {
        req.flash('errors', { msg: 'An error occurred while signing up. Please try again!' })
        return res.redirect('/signup');
    })

}

