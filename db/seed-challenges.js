const dotenv = require("dotenv");
const mongoose = require("mongoose");

// load ENV variables
dotenv.config({ path: "./../.env" });

// First we require our database
require("./../config/database");

// Import our Challenge model
const Challenge = require("./../models/Challenge");

// Seeding
Challenge.remove({})
  .then(function() {
    return Challenge.create([
      {
        title: "addOne",
        prompt:
          "Write a function called <code>addOne</code> that takes an integer as input and returns one plus that integer.",
        starterCode: "function addOne(a) {\n\t// Add code here\n}",
        difficulty: "Basic",
        revealed: true,
        functionSignatures: {
          test0: {
            input: 2,
            output: 3
          },
          test1: {
            input: 101,
            output: 102
          },
          test2: {
            input: -43,
            output: -42
          },
          test3: {
            input: 0,
            output: 1
          }
        }
      },
      {
        title: "filterEvens",
        prompt:
          "Write a function called <code>filterEvens</code> that takes an array of inegers as input and returns a new array with only even integers.",
        starterCode: "function filterEvens(arr) {\n\t//Write code here\n}",
        test: "This is another test!",
        difficulty: "Medium"
      }
    ]);
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
