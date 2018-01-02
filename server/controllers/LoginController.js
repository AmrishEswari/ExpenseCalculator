var Login = require('../models/Login');

exports.saveAdmin = function () {   

    Login.findOne({ 'email': new RegExp('^' + 'associate@fewd.com' + '$', "i") }, function (err, user) {
        if (user == null) {
            var newUser = new User;
            newUser.email = 'associate@fewd.com';
            newUser.password = 'welcome123';
            newUser.save(function (saveErr, saveUser) {
                if (saveErr) {
                    console.log(saveErr);
                    return;
                }
            });
            return;
        } 
    });
};

exports.validateusers = function (req, res) {
    console.log("req.body.password");
    console.log(req.body);
    Login.findOne({ 'email': new RegExp('^' + 'test@123.com' + '$', "i"), 'password': req.body.password }, function (err,response) {
        if (response) {
            res.status(HttpStatus.OK).json({
                status: 'success',
                code: HttpStatus.OK,
                data: response,
                error: ''
            });
        }
        console.log(response);

    });
}