var User = require('../models/User');
var HttpStatus = require('http-status');
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
exports.save = function (req, res) {
    var newUserInfo = new User();
    newUserInfo.individualexpensedetails = req.body.individualexpensedetails;  
    newUserInfo.save(function (saveErr, saveUserInfo) {
        if (saveErr) {
            console.log(saveErr);
            return;
        }
        res.status(HttpStatus.OK).json({
            status: 'success',
            code: HttpStatus.OK,
            data: saveUserInfo,
            error: ''
        });
        
    });
};

exports.list = function (req, res) {
    var getMonth = req.params.getMonth;
    console.log(getMonth);
    User.findOne({ "individualexpensedetails.monthandyear" : getMonth }, function (err, userDetails) {
        if (err) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'failure',
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: '',
                error: 'unexpected error in accessing data'
            });
            return;
        }
        res.status(HttpStatus.OK).json({
            status: 'success',
            code: HttpStatus.OK,
            data: userDetails,
            error: ''
        });
        console.log(userDetails);
    })
};