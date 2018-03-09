const mongoose = require("mongoose");

outputSchema = mongoose.Schema({
  output: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  }
});

module.exports = outputSchema;
