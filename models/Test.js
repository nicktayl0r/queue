const mongoose = require("mongoose");
const inputSchema = require("./Input");
const outputSchema = require("./Output");

const testSchema = mongoose.Schema({
  inputs: [inputSchema],
  outputs: [outputSchema]
});

module.exports = testSchema;
