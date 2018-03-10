const dotenv = require("dotenv");
const mongoose = require("mongoose");

// load ENV variables
dotenv.config();

// First we require our database
require("./../config/database");

// Import our Challenge model
const Challenge = require("./../models/Challenge");

// Seeding
Challenge.remove({})
  .then(function() {
    return Challenge.create({
      title: "add",
      prompt:
        "Write a function called `add` that accepts *any* quantity of numbers, adds them together and returns the resulting [sum](https://en.wikipedia.org/wiki/Summation). You should assume all parameters will be numbers.",
      examples: `
      add(1) //=> 1
      add(1,50,1.23) //=> 52.23
      add(7,-12) //=> -5
      `,
      due: Date.now(),
      difficulty: "Basic",
      assigned: true,
      tests: [
        {
          inputs: [
            {
              input: 5
            },
            {
              input: 6
            }
          ],
          outputs: [
            {
              output: 11
            }
          ]
        }
      ]
    });
  })
  .then(function(challenges) {
    console.log(challenges);
    process.exit;
    mongoose.connection.close();
  })
  .catch(function(err) {
    console.log(`Seed failed with error ${err}`);
    process.exit;
    mongoose.connection.close();
  });
