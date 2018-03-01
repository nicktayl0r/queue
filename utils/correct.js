const _ = require("lodash");
const util = require("util");

function formatTestString(input) {
  return Array.isArray(input) ? JSON.stringify(input) : input;
}

function correct(challengeName, studentSubmission, correctAnswers) {
  let wrongAnswers = [];
  for (let key in correctAnswers) {
    let correctAnswer = _.isEqual(
      studentSubmission[key],
      correctAnswers[key].output
    );
    let empty = _.isEmpty(correctAnswers[key]);

    if (!correctAnswer && !empty) {
      wrongAnswers.push(
        `<code>${challengeName}(${formatTestString(
          correctAnswers[key].input
        )})</code> should have returned <code>${formatTestString(
          correctAnswers[key].output
        )}</code>, but instead returned <code>${formatTestString(
          studentSubmission[key]
        )}</code><br><br>`
      );
    }
  }
  return wrongAnswers.length ? wrongAnswers : false;
}

module.exports = correct;
