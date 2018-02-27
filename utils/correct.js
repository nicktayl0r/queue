const isEqual = require("lodash").isEqual;
const util = require("util");

function correct(studentSubmission, correctAnswers) {
  let wrongAnswers = {};
  for (let key in correctAnswers) {
    if (isEqual(studentSubmission[key], correctAnswers[key])) {
      wrongAnswers[key] = {};
    }
  }
}

module.exports = correct;
