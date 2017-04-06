var express = require('express');
var User = require('../models/user');
var auth = require('../core/providers/authentication');
var repo = require('../repositories/user-repository');
var hash = require('../core/providers/hash');
var config = require('../config/server');
var router = express.Router();

router.get(
    '/usernames',
    function (req, res, next) {

        var filter = req.query.filter ? req.query.filter.trim() : '';

        repo.getUsernames(filter, function (err, usernames) {

            if (err)
                return res.status(500).json({
                    success: false,
                    message: "Could not get usernames"
                });

            return res.json({
                success: true,
                data: usernames
            });
        });
    })

router.get(
    '/:username',
    auth.authenticateToken,
    function (req, res, next) {

        repo.getUserByEmailOrUsername(req.params.username, function (err, user) {
            if (err)
                return res.status(500)
                    .json({
                        success: false,
                        message: "Internal error"
                    });

            if (!user)
                return res.status(404)
                    .json({
                        success: false,
                        message: "User not found"
                    });

            var userJson = JSON.parse(JSON.stringify(user)); // HACK - ID not surrounded in quotes causing issue
            if (userJson._id !== req.user._id)
                return res.status(401)
                    .json({
                        success: false,
                        message: "You are not authorised to get this user's details"
                    });

            console.log("user authorised. Sending payload");

            return res.json({
                success: true,
                // Explicitly sending what we want to send
                data: {
                    _id: user._id,
                    userName: user.userName
                }
            })

        });
    });

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