const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
    title: String, 
    prompt: String, 
    starterCode: String, 
    test: String
}, { 
    timestamps: true
})

module.exports = mongoose.model("Challenge", challengeSchema);