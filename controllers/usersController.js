const User = require('./../models/User');

exports.login = function(req, res) {
    res.render('./account/login');

}

exports.logout = function(req, res) {

}

exports.signup = function(req, res) {
    res.render('./account/signup');
}