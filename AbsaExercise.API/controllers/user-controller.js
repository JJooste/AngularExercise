var express = require('express');
var User = require('../models/user');
var auth = require('../core/providers/authentication');
var repo = require('../repositories/user-repository');
var hash = require('../core/providers/hash');
var config = require('../config/server');
var router = express.Router();

router.post(
    '/register',
    function (req, res, next) {
        //console.log(req);
        var user = new User({
            userName: req.body.userName,
            password: req.body.password
        });

        repo.registerUser(user, function (err, user) {
            if (err)
                return res.json({
                    success: false,
                    message: err
                });

            next(null);
        });
    },
    auth.generateUserToken);




router.post('/authenticate', auth.generateUserToken);

router.post(
    '/validate-token',
    auth.authenticateToken,
    function (req, res, next) {
        return res.json({
            success: true,
            message: "Token is valid"
        });
    }
);

router.post('/renew-token', auth.authenticateToken, auth.generateUserToken);

module.exports = router;