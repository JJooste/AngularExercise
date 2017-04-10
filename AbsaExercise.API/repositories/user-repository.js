var User = require('../models/user');
var _ = require('underscore');

(function (repo) {
    repo.registerUser = function (user, next) {

        if (user.password === '') {
            return next("Unable to register user with no password", null);
        }

        User.findOne({ userName: user.userName })
            .exec(function (err, existingUser) {
                if (!err && !existingUser) {
                    user.save(function (err) {
                        if (err)
                            return next(err, null);

                        next(null, user);
                    });
                } else {
                    if (existingUser)
                        return next("Username not available", null);
                    else
                        return next("Unable to register user, please try again later", null);
                }
            });

    };

    repo.getUserByUsername = function (userName, next) {
        User.findOne(
            { userName: userName })
            .exec(function (err, user) {
                if (err) return next(err, null);

                next(null, user);
            });
    };
})(module.exports);