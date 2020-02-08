const axios = require('axios');
const mongoose = require('mongoose');
const EmptyHead = require('../model/EmptyHead');

// @desc load model to DB
// @request GET
// @return collection of DB
exports.getQuotes = async (req, res, next) => {
	try {
		console.log('finding....');
		const collection = await EmptyHead.find();
		console.log('found');
		res.status(200).json(collection);
	} catch (err) {
		res.status(500).json('something went wrong!');
	}
};

// @desc save model to DB
// @reqeust GET
// @return collecetion of DB
exports.addQuotes = async (req, res, next) => {
	try {
		console.log(req.body);
		const { name, quote } = req.body;
		const newEmptyHead = new EmptyHead({
			name,
			quote
		});
		await newEmptyHead.save();
		const collection = await EmptyHead.find();
		res.status(200).json(collection);
	} catch (err) {
		console.log(err);
		res.status(500).json('something went wrong');
	}
};

exports.test = async (req, res, next) => {
	try {
		res.send('hello, world!');
	} catch (err) {
		console.log(err);
		res.status(500).json('something went wrong');
	}
};
