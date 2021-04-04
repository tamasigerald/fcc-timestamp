const express = require('express');
const router = express.Router();

const controller = require('./controllers');

router.route('/')
.get(controller.getHTML)

router.route('/api/timestamp/:date?')
.get(controller.handleTimestamp)

module.exports = router;
