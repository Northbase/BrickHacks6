const express = require('express');
const router = express.Router();

const { getQuotes, addQuotes, searchQuote } = require('../../controller');

// @route: https://localhost/api/quotes
router.route('/').get(getQuotes);
router.route('/add').post(addQuotes);
router.route('/search').get(searchQuote);

module.exports = router;
