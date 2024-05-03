var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'API CHALLENGE 6' });
});

module.exports = router;
