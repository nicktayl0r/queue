const Challenge = require('./../models/Challenge');
const vm = require('vm');
const util = require('util');
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
    Challenge.findById(req.params.challenge_id)
    .then(function(challenge){
        res.render('./challenges/showChallenge', { challenge });
    })
    .catch(function(err) {
        console.log(`Error in showChallenge action in challengesController: ${err}`);
    })
}

/*
    POST an answer to a challenge
*/
exports.submitChallenge = function(req, res) {
    let executionString = `${req.body.code}
        var x = addOne(5);
    `
    console.log(executionString);

    const sandBox = { x: null };
    try {
        vm.createContext(sandBox);
        vm.runInContext(executionString, sandBox);
    
        console.log(sandBox)
    
        if (sandBox.x == 6) {
            res.json('challenge correct').status(200);
        } else {
            res.json('not correct! Try again!').status(200);
        }
    } catch(err) {
        console.log(err);
        res.json(JSON.stringify(err)).status(200);
    }
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