var express = require('express');
var router = express.Router();
const mongooseController = require('../controllers/mongooseController')
const authenticateToken = require('../middleware/auth')

/* GET users listing. */
// router.get('/accounts', mongooseController.find)

// ROUTE EXAMPLE //
router.get('/get/check-token', authenticateToken, (req, res) => {
    res.send('token ok.')
})

// GET //
router.get('/get/:model', mongooseController.find)

router.get('/getOne/:model/:id', mongooseController.findOne)

// POST //
router.post('/insert/:model', mongooseController.save)

router.post('/get/:model', mongooseController.find)

router.post('/getOne/:model/:id', mongooseController.findOne)
router.post('/getOne/:model', mongooseController.findOne)

router.post('/aggregate/:model', mongooseController.aggregate)

// PUT //
router.put('/update/:model/:id', mongooseController.update)
router.put('/update/:model', mongooseController.update)

// DELETE //
router.delete('/delete/:model/:id', mongooseController.remove)
router.delete('/delete/:model', mongooseController.remove)

module.exports = router;
