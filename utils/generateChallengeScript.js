/*
    @challengeName := String
    @tests := Object 
*/

function generateChallengeScript(challengeName, tests) {
  let challengeScript = "";
  for (let key in tests) {
    if (tests[key] !== undefined) {
      challengeScript += `var ${key} = ${challengeName}(${tests[key]
        .input});\n`;
    }
  }
  return challengeScript;
}

module.exports = generateChallengeScript;
