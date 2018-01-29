const express = require('express');
const router = express.Router();
const challenges = require('./../controllers/challengesController');

/*
    GET /challenges : Show all challenges
*/
router.get('/challenges', challenges.getAllChallenges);

/*
    GET /challenges/:challenge_id : Show particular challenge
*/
router.get('/challenges/:challenge_id', challenges.showChallenge);

/*
    POST /challenges/:challenge_id : Student submit answer to challenge
*/
router.post('/challenges/:challenge_id', challenges.submitChallenge);

/*
    GET /challenge/new : New challenge 
*/
router.get('/challenges/new', challenges.newChallenge);

/*
    POST /challenge : Save new challenge in DB
*/
router.post('/challenges', challenges.createChallenge);

module.exports = router;