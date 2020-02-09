const mongoose = require('mongoose');

const NameCardSchema = new mongoose.Schema({
	origin: {
		type: String,
		default: 'jokester'
	},
	names: [
		{
			type: String,
			default: 'jokester'
		}
	],
	quotes: [
		{
			type: String,
			default: '...'
		}
	],
	time: {
		type: Date,
		default: Date.now()
	}
});

// save the scheme to 'emptyheads'
module.exports = mongoose.model('emptyheads', NameCardSchema);
