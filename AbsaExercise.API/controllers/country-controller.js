var express = require('express');
var auth = require('../core/providers/authentication');
var Country = require('../models/country');
var repo = require('../repositories/country-repository');
var router = express.Router();

router.get('/:id', auth.authenticateToken, function (req, res, next) {
    repo.getOne(req.query.id, function (err, country) {
        if (err)
            return res.status(500).json({
                success: false,
                message: "Internal error: " + err
            });

        return res.json({
            success: true,
            data: country
        });
    });
});

router.get('', auth.authenticateToken, function (req, res, next) {
    repo.getAll(function (err, countries) {
        if (err)
            return res.status(500).json({
                success: false,
                message: "Internal error: " + err
            });

        return res.json({
            success: true,
            data: countries
        });
    });
});


module.exports = router;