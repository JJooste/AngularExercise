var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routeConfig = require('./routes')
var db = require('./config/database');
var mongoose = require('mongoose');
var jwtConfig = require('./config/jwt');
var cors = require('cors');
var app = express();

app.set('JWT_SECRET', jwtConfig.secret);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    allowedOrigins: [
        '*'
    ]
}));
routeConfig.configureRoutes(app);
mongoose.connect(db.url);

module.exports = app;