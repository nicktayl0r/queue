const _ = require("lodash");
const util = require("util");

function correct(challengeName, studentSubmission, correctAnswers) {
  let wrongAnswers = [];
  for (let key in correctAnswers) {
    let correctAnswer = _.isEqual(
      studentSubmission[key],
      correctAnswers[key].output
    );
    let empty = _.isEmpty(correctAnswers[key]);

    if (!correctAnswer && !empty) {
      // TODO: finish handling for arrays
      // let input = Array.isArray(correctAnswers[key].input) ? JSON.stringify(correctAnswers[key].input) :
      // wrongAnswers.push(
      //   `${challengeName}(${}) should have returned ${correctAnswers[key]
      //     .output}, but instead returned ${studentSubmission[key]}`
      // );
    }
  }
  return wrongAnswers.length ? wrongAnswers : false;
}

module.exports = correct;
