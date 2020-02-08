const express = require('express');
const router = express.Router();

const { getTest, saveTest } = require('../../controller');

// @route: https://localhost/api/quotes
router.route('/').get(getTest);
router.route('/add').post(saveTest);

module.exports = router;
