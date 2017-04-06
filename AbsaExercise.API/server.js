var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routeConfig = require('./routes')
var db = require('./config/database');
var mongoose = require('mongoose');
var jwtConfig = require('./config/jwt');
var cors = require('cors');
//var fileUpload = require('express-fileupload');
var app = express();

var cron = require('node-cron');
app.set('JWT_SECRET', jwtConfig.secret);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(fileUpload());
app.use(cookieParser());
app.use(cors({
    allowedOrigins: [
        '*.localhost:*'
    ]
}));
routeConfig.configureRoutes(app);
mongoose.connect(db.url);

module.exports = app;