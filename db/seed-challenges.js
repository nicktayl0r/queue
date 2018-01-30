const dotenv = require('dotenv');
const mongoose = require('mongoose');

// load ENV variables
dotenv.config({ path: "./../.env" });

// First we require our database
require('./../config/database');

// Import our Challenge model
const Challenge = require('./../models/Challenge');

// Seeding
Challenge.remove({})
.then(function() {
    return Challenge.create([
        {
            title: 'addOne',
            prompt: 'Write a function called <code>addOne</code> that takes an integer as input and returns one plus that integer.',
            starterCode: 'function addOne(a) {\n// Add code here\n}',
            test: 'This is a test!',
            difficulty: 'Basic'
        },
        {
            title: 'filterEvens',
            prompt: 'Write a function called <code>filterEvens</code> that takes an array of inegers as input and returns a new array with only even integers.',
            starterCode: 'function filterEvens(arr) {\nWrite code here}',
            test: 'This is another test!',
            difficulty: 'Medium'
        }
    ])
})
.then(function(challenges){
    console.log(challenges);
    process.exit;
    mongoose.connection.close();
})
.catch(function(err) {
    console.log(`Seed failed with error ${err}`);
    process.exit;
    mongoose.connection.close();
});
