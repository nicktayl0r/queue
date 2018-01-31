const Challenge = require('./../models/Challenge');

/*
    GET a list of all challenges
*/
exports.getAllChallenges = function(req, res) {
    Challenge.find({})
    .then(function(challenges){
        res.render('./challenges/listAllChallenges', { challenges })
    })
    
}

/*
    GET a challenge
*/
exports.showChallenge = function(req, res) {
    res.render('./challenges/showChallenge');
}

/*
    POST an answer to a challenge
*/
exports.submitChallenge = function(req, res) {
    res.send('submitChallenge');
}

/*
    GET form for a new challenge
*/
exports.newChallenge = function(req, res) {
    res.send('newChallenge');
}

/*
    POST admin creates new challenge in DB
*/
exports.createChallenge = function(req, res) {
    res.send('createChallenge');
}