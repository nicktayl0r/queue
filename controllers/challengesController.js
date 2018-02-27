const Challenge = require("./../models/Challenge");
const vm = require("vm");
const _ = require("lodash");
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
      try {
        // Copy of function signature to create sandbox
        let sandbox = _.cloneDeep(challenge.functionSignatures.toObject());

        // Create test string
        let testString = `${req.body.code}\n${generateChallengeScript(
          challenge.title,
          sandbox
        )}`;

        // Create new script
        let script = new vm.Script(testString);

        // Create context with sandbox and test string
        let context = vm.createContext(sandbox);

        // Run script in context
        script.runInContext(context, { timeout: 1000, displayErrors: true });

        // Respond with user feedback
        res.json(
          correct(
            challenge.title,
            sandbox,
            challenge.functionSignatures.toObject()
          )
        );
      } catch (err) {
        console.log(`Error with student submitted code is: ${err}`);
        res.json({ name: err.name, message: err.message });
      }
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
