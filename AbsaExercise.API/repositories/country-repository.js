var Country = require('../models/country');
var Member = require('../models/member');
var _ = require('underscore');
var fs = require('fs');

(function (repo) {
    repo.create = function (country, next) {
        country.save(function (err, country) {
            if (err)
                return next(err, null);
            else
                next(null, country);
        });
    }

    repo.getOne = function (id, next) {
        if (!id || id === '')
            return next("Id cannot be null", null);

        Country.findOne(
            { _id: slugOrId })
            .populate('_members')
            .exec(function (err, country) {
                if (err) return next(err, null);

                next(null, country);
            });
    };

    repo.getAll = function (next) {

        Country.find({})
            .exec(function (err, countries) {
                if (err) 
                    return next(err, null);

                next(null, countries);
            });
    };



})(module.exports);