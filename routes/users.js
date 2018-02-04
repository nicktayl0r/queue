const express = require('express');
const router = express.Router();
const users = require('./../controllers/usersController');

/*
    login route
*/
router.get('/login', users.login);

/*
    logout route
*/
router.get('/logout', users.logout);

/*
    signup route
*/
router.get('/signup', users.signup);

module.exports = router;