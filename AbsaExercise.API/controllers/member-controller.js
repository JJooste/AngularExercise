var express = require('express');
var auth = require('../core/providers/authentication');
var Member = require('../models/member');
var countryRepo = require('../repositories/member-repository');
var repo = require('../repositories/member-repository');
var router = express.Router();

router.get('/:id', auth.authenticateToken, function (req, res, next) {
    repo.getOne(req.params.id, function (err, member) {
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
    repo.getAll(function (err, members) {
        if (err)
            return res.status(500).json({
                success: false,
                message: "Internal error: " + err
            });

        return res.json({
            success: true,
            data: members
        });
    });
});

router.post('/', auth.authenticateToken, function (req, res, next) {

    var member = new Member({
        name: req.body.name,
        surname: req.body.surname,
        country: req.body.country
    });

    repo.create(member, function (err, member) {

        if (err)
            return res.status(500).json({
                success: false,
                message: err.message
            });
        else
            return res.json({
                success: true,
                data: member
            });
    });

});

router.put('/', auth.authenticateToken, function (req, res, next) {

    repo.getOne(req.body._id, function (err, member) {
        if (err)
            return res.status(500).json({
                success: false,
                message: "Internal error: " + err
            });

        member.name = req.body.name;
        member.surname = req.body.surname;
        member.country = req.body.country;

        repo.update(member, function (err, member) {

            if (err)
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            else
                return res.json({
                    success: true,
                    data: member
                });
        });
    });

});

module.exports = router;