var express = require('express');
var sanityController = require('./controllers/sanity-controller');
var userController = require('./controllers/user-controller');
var countryController = require('./controllers/country-controller');
var memberController = require('./controllers/member-controller');

(function (routes) {
    routes.configureRoutes = function (app) {
        app.use('/api/sanity', sanityController);
        app.use('/api/user', userController);
        app.use('/api/country', countryController);
        app.use('/api/member', memberController);
        app.use(express.static(__dirname + '/assets'));

        app.use(function (req, res, next) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        });

        // Error handler
        app.use(function (err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            res.status(err.status || 500).json({
                message: "Something happened: " + res.locals.error
            });
        });
    };
})(module.exports);
