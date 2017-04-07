var Member = require('../models/member');

(function (repo) {

    repo.create = function (member, next) {
        member.save(function (err, member) {
            if (err) return next(err, null);

            repo.getOne(member._id, next);
        });
    }

     repo.update = function (member, next) {
        member.save(function (err, member) {
            if (err) return next(err, null);

            repo.getOne(member._id, next);
        });
    }

    repo.getMembersByCountry = function (countryId, next) {
        Member.find({ _country: countryId })
            .exec(function (err, members) {
                if (err) return next(err, null);

                next(null, members);
            });
    };

    repo.getAll = function (next) {
        Member.find()
            .populate('country')
            .exec(function (err, members) {
                if (err) return next(err, null);

                next(null, members);
            });
    };

    repo.getOne = function (id, next) {
        Member.findOne({ _id: id })
            .populate('country')
            .exec(function (err, member) {
                if (err) return next(err, null);

                next(null, member);
            });
    };

})(module.exports)