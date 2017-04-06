var router = require('express').Router();

router.get('/', function (req, res, next) {
  res.json({ message: 'API is up and running. You are sane.' });
});

module.exports = router;