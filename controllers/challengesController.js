const Challenge = require("./../models/Challenge");
const vm = require("vm");
const cloneDeep = require("lodash").cloneDeep;
const correct = require("./../utils/correct");
const generateChallengeScript = require("./../utils/generateChallengeScript");

/*
    GET a list of all challenges
*/
exports.getAllChallenges = function(req, res) {
  Challenge.find({}).then(function(challenges) {
    res.render("./challenges/listAllChallenges", { challenges });
  });
};

/*
    GET a challenge
*/
exports.showChallenge = function(req, res) {
  Challenge.findById(req.params.challenge_id)
    .then(function(challenge) {
      res.render("./challenges/showChallenge", { challenge });
    })
    .catch(function(err) {
      console.log(
        `Error in showChallenge action in challengesController: ${err}`
      );
    });
};

/*
    POST an answer to a challenge
*/
exports.submitChallenge = function(req, res) {
  Challenge.findById(req.params.challenge_id)
    .then(function(challenge) {
      let tests = challenge.testResults.toObject();
      let sandBoxedCode = `${req.body.code}\n${generateChallengeScript(
        challenge.title,
        tests
      )}`;
      let script = new vm.Script(sandBoxedCode);
      let correctCopy = cloneDeep(tests);
      let context = vm.createContext(tests);

      script.runInContext(context, { timeout: 1000, displayErrors: true });

      console.log(tests);
      correct(tests, correctCopy);
      res.json("cats");
    })
    .catch(function(err) {
      console.log(err);
      res.json(JSON.stringify(err)).status(200);
    });
};

/*
    GET form for a new challenge
*/
exports.newChallenge = function(req, res) {
  res.send("newChallenge");
};

/*
    POST admin creates new challenge in DB
*/
exports.createChallenge = function(req, res) {
  res.send("createChallenge");
};
