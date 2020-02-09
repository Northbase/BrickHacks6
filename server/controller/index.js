const axios = require('axios');
const mongoose = require('mongoose');
const EmptyHead = require('../model/EmptyHead');

// @desc load model to DB
// @request GET
// @return collection of DB
exports.getQuotes = async (req, res, next) => {
	try {
		const collection = await EmptyHead.find();
		res.status(200).json(collection);
	} catch (err) {
		res.status(500).json('getQuote failed!');
	}
};

// @desc save model to DB
// @reqeust GET
// @return collecetion of DB
exports.addQuotes = async (req, res, next) => {
	try {
		console.log(req.body);
		const { names, quotes } = req.body;
		const newEmptyHead = new EmptyHead({
			origin: 'bob',
			names: names,
			quotes: quotes
		});
		await newEmptyHead.save();
		const collection = await EmptyHead.find();
		res.status(200).json(collection);
	} catch (err) {
		console.log(err);
		res.status(500).json('addQuote failed!');
	}
};

// @desc delete target entry
// @reqeust DELTE
// @return collecetion of DB
exports.deleteQuote = async (req, res, next) => {
	try {
		// console.log(req);
		// const { target } = req.body;
		// console.log(req.params);
		const { target } = req.params;
		const targetQuotes = await EmptyHead.deleteOne({ _id: target });
		res.status(200).json(targetQuotes);
	} catch (err) {
		console.log('delete quote failed');
	}
};

// @desc search entry that contains target
// @reqeust GET
// @return collecetion of DB that contains target
exports.searchQuote = async (req, res, next) => {
	try {
		console.log(req.body);
		console.log(req.params);
		const { target } = req.body;
		const targetQuotes = await EmptyHead.find({ names: target });
		res.status(200).json(targetQuotes);
	} catch (err) {
		console.log(err);
		res.status(500).json('searchQuote failed!');
	}
};
