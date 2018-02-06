const User = require('./../models/User');
const passport = require('passport');
const validator = require('express-validator');

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
    if (req.user) {
        res.redirect('/challenges');
    }

    res.render('./account/login');
}

/*
    GET '/signup' page
*/
exports.signup = function(req, res) {
    if (req.user) {
        return res.redirect('/login');
    }
    res.render('./account/signup');
}

/* 
    POST a request to '/signup' route
*/
exports.postSignup = function(req, res, next) {
    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('password', 'Password cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    let errors = req.validationErrors();

    if (errors) {
        req.flash('error', errors);
        return res.redirect('/signup');
    }

    User.findOne({ email: req.body.email })
    .then(function(user) {
        
        if (user) {
            req.flash('error', { msg: 'The email address you have entered is already associated with another account.' });
            return res.redirect('/signup');
        }

        // Create new user
        user = new User();
        user.profile.name = req.body.name;
        user.profile.email = req.body.email;
        user.profile.password = req.body.password;

        user.save()
        .then(function(err) {
            req.login(user, function(err) {
                res.redirect('/challenges');
            });
        });
    })
    .catch(function(err) {
        console.log(`Got the following err: ${err}`);
        res.render('./account/signup');
    });
};


exports.postLogin = function(req, res) {
    res.send('hi');
}

