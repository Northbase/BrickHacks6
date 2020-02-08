const express = require('express');
const router = express.Router();

const { test } = require('../../controller');

// @route: https://localhost/api/test
router.route('/').get(test);

module.exports = router;
