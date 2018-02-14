const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema(
  {
    title: String,
    prompt: String,
    starterCode: String,
    test: String,
    difficulty: {
      type: String,
      enum: ["Basic", "Medium", "Advanced"]
    },
    revealed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Challenge", challengeSchema);
