/**
 * Created by Sundar on 5/8/16.
 */
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
var RecordController = require('./controllers/RecordController');
var UserController = require('./controllers/UserController');
var LoginController = require('./controllers/LoginController');

module.exports = function (app) {
  app.all('/', function (req, res) {
    var __dirname='./public/pages/';
      res.sendFile('login.html', { root: __dirname });
    });

    app.get('/playGround', function (req,res) {
        var __dirname='./public/pages/';
        res.sendFile('index.html', { root: __dirname });
    });
    app.get('/expensehistory', function (req, res) {
        var __dirname = './public/pages/';
        res.sendFile('expensehistory.html', { root: __dirname });
    });
    app.get('/getRecords', RecordController.list);
    app.post('/insertRecords', RecordController.save);
    app.post('/insertindividualExpense', UserController.save);
    app.get('/getindividualExpense/:getMonth', UserController.list);
    app.get('/getUsers', LoginController.validateusers);
    
};