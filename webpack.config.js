const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./client-js/index.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js"
  },
  mode: "development",
  watch: true
};
