var jwt = require('jsonwebtoken');
var jwtSecret = require('../../config/jwt').secret;
var User = require('../../models/user');
var userRepository = require('../../repositories/user-repository');

(function (auth) {

    auth.authenticateToken = function (req, res, next) {
        var token = req.body.token ||
            req.query.token ||
            req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, jwtSecret, function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    req.user = decoded;
                    next();
                }
            });
        } else {
            return res.status(403)
                .json({
                    success: false,
                    message: "Access denied. No JWT provided"
                });
        }
    };

    auth.generateUserToken = function (req, res, next) {

        var userName = req.body.userName;

        userRepository.getUserByUsername(userName, function (err, user) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Error getting user from database provider"
                });
            }

            if (!user) {
                res.json({
                    success: false,
                    message: "Incorrect Username or password"
                });

            } else {

                user.validatePassword(req.body.password, function (err, isValid) {
                    if (err) {
                        return res.status(500).json({
                            success: false,
                            message: "Internal hash error"
                        });
                    }

                    if (!isValid) {

                        res.json({
                            success: false,
                            message: "Incorrect Username or password"
                        });

                    } else {
                        // Creating this obj to avoid sending password and
                        // other potentially harmful info in token
                        var userData = {
                            userName: user.userName
                        };
                        userData.token = jwt.sign(userData, jwtSecret, {
                            expiresIn: 604800 // Expires in 1 week
                        });

                        res.json({
                            success: true,
                            message: 'User token successfully generated',
                            data: userData
                        });
                    }
                });
            }
        });
    };

    auth.decryptToken = function (token, next) {
        return jwt.decode(token, {
            json: true,
        })
    };

})(module.exports);