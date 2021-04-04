const express = require('express');
const router = express.Router();

const controller = require('./controllers');

router.route('/')
.get(controller.getHTML)

router.route('/api/timestamp')
.get(controller.test)

router.route('/api/test')
.get(controller.test)


module.exports = router;
