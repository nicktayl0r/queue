const mongoose = require("mongoose");
const showdown = require("showdown");
const testSchema = require("./Test");

const challengeSchema = new mongoose.Schema(
  {
    title: String,
    prompt: String,
    examples: String,
    due: Date,
    difficulty: {
      type: String,
      enum: ["Basic", "Medium", "Advanced"]
    },
    assigned: {
      type: Boolean,
      default: false
    },
    tests: [testSchema]
  },
  {
    timestamps: true
  }
);

// Middleware to convert prompt to HTML
challengeSchema.pre("save", function(next) {
  let converter = new showdown.Converter();
  this.prompt = converter.makeHtml(this.prompt);
  next();
});

module.exports = mongoose.model("Challenge", challengeSchema);
