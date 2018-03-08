const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const express = require("express");
const expressValidator = require("express-validator");
const flash = require("express-flash");
const logger = require("morgan");
const methodOverride = require("method-override");
const passport = require("passport");
const path = require("path");
const session = require("express-session");

// Import .env file
dotenv.config({ path: ".env" });

// Require passport configuration
require("./config/passport");

// Import routes
const userRoutes = require("./routes/users.js");
const challengeRoutes = require("./routes/challenges.js");

// Create Express server
const app = express();

// Connecting to MongoDB
require("./config/database");

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Mounting middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);
app.use(expressValidator());
app.use(methodOverride("_method"));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
app.disable("x-powered-by");

// Serve static assets
app.use(express.static(path.join(__dirname, "dist")));

// Mount routes below
app.use("/", userRoutes);
app.use("/", challengeRoutes);

// Server
const server = app.listen(app.get("port"), function() {
  console.log(`Listening on port ${app.get("port")}`);
});
