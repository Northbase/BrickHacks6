const express = require('express');
const router = express.Router();

const { getQuotes, addQuotes } = require('../../controller');

// @route: https://localhost/api/quotes
router.route('/').get(getQuotes);
router.route('/add').post(addQuotes);

module.exports = router;
