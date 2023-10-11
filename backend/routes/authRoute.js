var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController')

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('router is ok')
});

router.post('/login', function(req, res) {
    authController.login(req, res)
})

module.exports = router;
