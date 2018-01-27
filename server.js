const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const express = require("express");
const logger = require("morgan");
const path = require("path");

// Import .env file 
dotenv.config({ path: ".env" });

// Import routes
const userRoutes = require('./routes/users.js');
const challengeRoutes = require('./routes/challenges.js');

// Create Express server
const app = express();

// Connecting to MongoDB
require('./config/database');

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Mounting middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

// Mount routes below
app.use('/', userRoutes);
app.use('/', challengeRoutes);


// Server
const server = app.listen(app.get("port"), function() {
    console.log(`Listening on port ${app.get("port")}`);
});