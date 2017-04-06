var express = require('express');
var auth = require('../core/providers/authentication');
var Member = require('../models/member');
var countryRepo = require('../repositories/member-repository');
var repo = require('../repositories/member-repository');
var router = express.Router();

router.get('/:id', auth.authenticateToken, function (req, res, next) {
    repo.getOne(req.query.id, function (err, member) {
        if (err)
            return res.status(500).json({
                success: false,
                message: "Internal error: " + err
            });

        return res.json({
            success: true,
            data: member
        });
    });
});

router.get('', auth.authenticateToken, function (req, res, next) {
    repo.getAll(function (err, member) {
        if (err)
            return res.status(500).json({
                success: false,
                message: "Internal error: " + err
            });

        return res.json({
            success: true,
            data: member
        });
    });
});

router.post('/', auth.authenticateToken, function (req, res, next) {

    countryRepo.getOne(req.body.post._id, function (err, country) {

        if (err) return res.status(500).json({
            success: false,
            message: err.message
        });

        if (!post) {
            return res.status(500).json({
                success: false,
                message: "Invalid country"
            });
        }

        var member = new Member({
            name: req.body.name,
            surname: req.body.surname,
            _post: req.body.post._id,
            createdOnDate: now
        });

        country.members.push(member);

        country.save(function(err, country) {console.log(country)});

        // repo.create(member, function (err, member) {
        //     if (err)
        //         return res.status(500)
        //             .json({
        //                 success: false,
        //                 message: err
        //             });

        //     res.json({
        //         success: true,
        //         data: member
        //     });
        // })
    })

});

module.exports = router;