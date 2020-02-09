const express = require('express');
const router = express.Router();

const {
	getQuotes,
	addQuotes,
	searchQuote,
	deleteQuote
} = require('../../controller');

// @route: https://localhost/api/quotes
router.route('/').get(getQuotes);
router.route('/add').post(addQuotes);
router.route('/search').get(searchQuote);
router.route('/delete/:target').delete(deleteQuote);

module.exports = router;
