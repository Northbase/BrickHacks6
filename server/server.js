const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Load env
dotenv.config({ path: './config/config.env' });

// MongoDB
mongoose
	.connect(process.env.MONGO_DB_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	.then(res => console.log('connected to DB'))
	.catch(res => console.log('connection to DB failed'));

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/quotes', require('./routes/api/quotes'));

// Production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
	app.get('*', (req, res) =>
		res.sendFile(path.join(__dirname, '../client/build/index.html'))
	);
}

// App
app.listen(port, () => {
	console.log(`app running on port ${port}`);
});
