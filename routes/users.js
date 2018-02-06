const express = require('express');
const router = express.Router();
const users = require('./../controllers/usersController');

router.get('/', users.handleRoot);

/*
    login route
*/
router.get('/login', users.login);

/*
    logout route
*/
// router.get('/logout', users.logout);

/*
    View signup page route
*/
router.get('/signup', users.signup);

/*
    User sign up
*/
router.post('/signup', users.postSignup);


module.exports = router;