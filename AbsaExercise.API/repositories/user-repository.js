var User = require('../models/user');
var _ = require('underscore');

(function (repo) {
    repo.registerUser = function (user, next) {

        if (user.password === '') {
            // TODO handle the event that a user regsiters without
            // a password. Social Users would not have a password.
        }

        // TODO - give more meaningful error if the username/email exists
        User.findOne({ userName: user.userName })
            .exec(function (err, existingUser) {
                if (!err && !existingUser) {
                    user.save(function (err) {
                        if (err)
                            return next(err, null);

                        next(null, user);
                    });
                } else {
                    return next("Unable to register user", null);
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