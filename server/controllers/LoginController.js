var Login = require('../models/Login');
var HttpStatus = require('http-status');

exports.saveAdmin = function (req,res) {      
    Login.findOne({ 'email': new RegExp('^' + 'test123@abc.com' + '$', "i") }, function (err, user) {
        if (user == null) {
            var newUser = new Login();
            newUser.email = 'test123@abc.com';
            newUser.password = 'test123';
            newUser.save(function (saveErr, saveUser) {
                if (saveErr) {
                    console.log(saveErr);
                    return;
                }
            });
            return;
        } else {
            console.log('Done save');
        }
    });
};

exports.validateusers = function (req, res) {     
    Login.findOne({
        $and: [{ 'email': new RegExp('^' + req.query.username + '$', "i") }, { 'password': req.query.password }]
    }, function (err, response) {
        if (response) {
            console.log(response);           
            res.status(HttpStatus.OK).json({
                status: 'success',
                code: HttpStatus.OK,
                data: response,
                error: ''
            });            
        }   
    });
}