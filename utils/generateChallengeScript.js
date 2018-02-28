/*
    @challengeName := String
    @tests := Object 
*/

function generateChallengeScript(challengeName, tests) {
  let challengeScript = "";
  for (let key in tests) {
    if (tests[key] !== undefined) {
      if (Array.isArray(tests[key])) {
        challengeScript += `var ${key} = ${challengeName}([${tests[key]
          .input}]);\n`;
      } else {
        challengeScript += `var ${key} = ${challengeName}(${tests[key]
          .input});\n`;
      }
    }
  }
  return challengeScript;
}

module.exports = generateChallengeScript;
