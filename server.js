//required dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
var routes = require('./api/routes/routes');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Access control
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//start Express server on defined port
app.listen(port);

//log to console to let us know it's working
console.log('API server started on: ' + port);

//call function defined in routes.js module
routes(app);

