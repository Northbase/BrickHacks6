const axios = require('axios');
const mongoose = require('mongoose');
const EmptyHead = require('../model/EmptyHead');

// @desc load model to DB
// @request GET
// @return collection of DB
exports.getTest = async (req, res, next) => {
	try {
		const collection = await EmptyHead.find();
		res.status(200).json(collection);
	} catch (err) {
		res.status(500).json('something went wrong!');
	}
};

// @desc save model to DB
// @reqeust GET
// @return collecetion of DB
exports.saveTest = async (req, res, next) => {
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
