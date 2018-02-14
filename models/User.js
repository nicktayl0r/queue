const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

/*
    Definition of User schema
*/
const userSchema = new mongoose.Schema(
  {
    instructor: {
      type: Boolean,
      default: false
    },
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
      gitHubURL: String
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", function save(next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, undefined, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

/*
    Model method to determine if password matches 
*/
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);
