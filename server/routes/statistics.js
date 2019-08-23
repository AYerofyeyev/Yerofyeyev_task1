const express = require('express');
const router = express.Router();

const unpairController = require('../controllers/unpairController');

/* GET statistics */
router.get('/statistics/:userId', unpairController.statistics);

module.exports = router;
