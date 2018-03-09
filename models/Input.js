const mongoose = require("mongoose");

inputSchema = mongoose.Schema({
  input: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  }
});

module.exports = inputSchema;
