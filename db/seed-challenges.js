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
    return Challenge.create();
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
