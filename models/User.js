const mongoose = require("mongoose");
const crypto 

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

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        cb(err, isMatch);
    });
}

module.exports = mongoose.model("User", userSchema);