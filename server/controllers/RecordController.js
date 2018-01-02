var Record = require('../models/Record');
var HttpStatus = require('http-status');

exports.save = function (req,res) {
    var recordDetails = new Record();
    recordDetails.monthandyear = req.body.monthandyear;
    recordDetails.noofpersons = req.body.noofpersons;
    recordDetails.grocerry = req.body.grocerry;
    recordDetails.commonexpenses = req.body.commonexpenses;
    recordDetails.cooksalary = req.body.cooksalary;
    recordDetails.internet = req.body.internet;
    recordDetails.oppshop = req.body.oppshop;
    recordDetails.roomrent = req.body.roomrent;
    console.log(recordDetails);
    recordDetails.save(function (saveErr, saveRecord) {
        if (saveErr) {
            console.log(saveErr);
            return;
        }
        res.status(HttpStatus.OK).json({
            status: 'success',
            code: HttpStatus.OK,
            data: saveRecord,
            error: ''
        });
    })

}

exports.list = function (req, res) {
    console.log("records");
    Record.find({}, function (err, records) {
        console.log(records);
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
            data: records,
            error: ''
        });        
    })
}