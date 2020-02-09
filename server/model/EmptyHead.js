const mongoose = require('mongoose');

const NameCardSchema = new mongoose.Schema({
	origin: {
		type: String,
		default: 'jokester'
	},
	names: [
		{
			type: String
		}
	],
	quotes: [
		{
			type: String
		}
	]
});

// save the scheme to 'emptyheads'
module.exports = mongoose.model('emptyheads', NameCardSchema);
