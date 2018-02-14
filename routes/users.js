const express = require("express");
const router = express.Router();
const users = require("./../controllers/usersController");

router.get("/", users.handleRoot);

/*
    login route
*/
router.get("/login", users.login);

/*
    View signup page route
*/
router.get("/signup", users.signup);

/*
    User sign up
*/
router.post("/signup", users.postSignup);

/*
    logout route
*/
router.post("/login", users.postLogin);

module.exports = router;
