var bcrypt = require('bcrypt-nodejs');

(function (hasher) {
    var self = this;

    hasher.hashPassword = function (password, next) {
        var saltRounds = 10;
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err, null);

            bcrypt.hash(password, salt, null, function (err, hash) {
                if (err) return next(err, null);

                return next(null, hash);
            });
        });
    };
    hasher.comparePasswords = function (clearPassword, hashedPassword, next) {
        bcrypt.compare(clearPassword, hashedPassword, function (err, isMatch) {
            if (err) return next(err);
            next(null, isMatch);
        });
    }
})(module.exports)