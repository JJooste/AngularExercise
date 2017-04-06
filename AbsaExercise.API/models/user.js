var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hasher = require('../core/providers/hash');

var userSchema = new mongoose.Schema({

    // Required Properties
    userName: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
});

userSchema.methods.validatePassword = function (candidatePass, next) {
    hasher.comparePasswords(candidatePass, this.password, function (err, isMatch) {
        if (err) return next(err);
        next(null, isMatch);
    });
};

userSchema.methods.setHashedPassword = function (password, next) {
    var self = this;

    hasher.hashPassword(password, function (err, hash) {
        if (err) return next(err);
        self.passwordHash = hash;
        return next(null);
    });
};

userSchema.pre('save', function (next) {
    var user = this;

    // Hash password if changed
    if (!user.isModified('password'))
        return next();

    hasher.hashPassword(user.password, function (err, hash) {
        if (err) {
            return next(err);
        }

        user.password = hash;

        return next(null);
    });
});


module.exports = mongoose.model('User', userSchema);