const mongoose = require('mongoose');

const NameCardSchema = new mongoose.Schema({
	name: String,
	quote: String
});

// save the scheme to 'emptyheads'
module.exports = mongoose.model('emptyheads', NameCardSchema);
