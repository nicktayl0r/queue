const User = require("./../models/User");
const passport = require("passport");

/*
    GET '/' view
*/
exports.handleRoot = function(req, res) {
  if (req.user) {
    return res.redirect("/challenges");
  }
  res.render("./account/login");
};

/*
    GET '/login' page
*/
exports.login = function(req, res) {
  if (req.user) {
    res.redirect("/challenges");
  }

  res.render("./account/login");
};

/*
    GET '/signup' page
*/
exports.signup = function(req, res) {
  if (req.user) {
    return res.redirect("/login");
  }
  res.render("./account/signup");
};

/* 
    POST a request to '/signup' route
*/
exports.postSignup = function(req, res, next) {
  req.assert("name", "Name cannot be blank").notEmpty();
  req.assert("email", "Email is not valid").isEmail();
  req.assert("email", "Email cannot be blank").notEmpty();
  req.assert("githuburl", "GitHub URL cannot be blank.").notEmpty();
  req.assert("password", "Password cannot be blank").notEmpty();
  req.sanitize("email").normalizeEmail({ remove_dots: false });

  let errors = req.validationErrors();

  if (errors) {
    req.flash("error", errors);
    return res.redirect("/signup");
  }

  // First check to see if user exists
  User.findOne({ email: req.body.email })
    .then(function(user) {
      if (user) {
        req.flash("error", {
          msg:
            "The email address you have entered is already associated with another account."
        });
        return res.redirect("/signup");
      }

      // Create new user
      user = new User();
      user.profile.name = req.body.name;
      user.profile.cohort = req.body.cohort;
      user.profile.githuburl = req.body.githuburl;
      user.password = req.body.password;
      user.email = req.body.email;

      user.save().then(function(err) {
        req.login(user, function(err) {
          res.redirect("/challenges");
        });
      });
    })
    .catch(function(err) {
      console.log(`Got the following err: ${err}`);
      res.render("./account/signup");
    });
};

/*
    POST /login new login
*/
exports.postLogin = function(req, res, next) {
  req.assert("email", "Email is not valid").isEmail();
  req.assert("email", "Email cannot be blank").notEmpty();
  req.assert("password", "Password cannot be blank").notEmpty();
  req.sanitize("email").normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    req.flash("error", errors);
    return res.redirect("/login");
  }

  passport.authenticate("local", function(err, user, info) {
    if (!user) {
      req.flash("error", info);
      return res.redirect("/login");
    }
    req.logIn(user, function(err) {
      res.redirect("/challenges");
    });
  })(req, res, next);
};
