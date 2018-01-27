const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    instructor: Boolean,
    email: {
        type: String, 
        unique: true
    },
    password: String, 
    passwordResetToken: String, 
    passwordResetExpires: Date, 
    profile: {
        name: String, 
        cohort: String, 
        githubURL: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);