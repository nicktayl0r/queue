const express = require("express");
const router = express.Router();
const challenges = require("./../controllers/challengesController");
const isLoggedIn = require("./../utils/isLoggedIn");
/*
    GET /challenges : Show all challenges
*/
router.get("/challenges", isLoggedIn, challenges.getAllChallenges);

/*
    GET /challenges/:challenge_id : Show particular challenge
*/
router.get("/challenges/:challenge_id", isLoggedIn, challenges.showChallenge);

/*
    POST /challenges/:challenge_id : Student submit answer to challenge
*/
router.post("/challenges/:challenge_id", challenges.submitChallenge);

/*
    GET /challenge/new : New challenge 
*/
router.get("/challenges/new", isLoggedIn, challenges.newChallenge);

/*
    POST /challenge : Save new challenge in DB
*/
router.post("/challenges", isLoggedIn, challenges.createChallenge);

module.exports = router;
