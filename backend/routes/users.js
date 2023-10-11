var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/whoami/:name', function(req, res, next) {
  res.send('You are ' + req.params.name)
})

module.exports = router;
