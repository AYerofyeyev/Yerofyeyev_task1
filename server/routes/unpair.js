const express = require('express');
const router = express.Router();

const unpairController = require('../controllers/unpairController');

router.post('/', unpairController.index);

module.exports = router;
