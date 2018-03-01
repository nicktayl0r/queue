const path = require("path");

module.exports = {
  entry: "./public/file.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};
