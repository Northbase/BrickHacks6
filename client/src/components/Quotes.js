import React, { Component } from 'react';
import axios from 'axios';
import './Quotes.css';

class AlertBox extends Component {
	constructor() {
		super();
		this.state = {
			names: [],
			quotes: []
		};
	}

	render() {
		return (
			<div>
				<h1>There's no quotes...</h1>
			</div>
		);
	}
}

class Quotes extends Component {
	constructor() {
		super();
		this.state = {
			quotes: []
		};
	}

	// send GET request to the server
	getQuotes = async () => {
		try {
			const Quotes = await axios({
				method: 'get',
				url: `/api/quotes`
			});
			console.log(Quotes.data);
			await this.setState({ quotes: [...Quotes.data] });
		} catch (err) {
			consnole.log('getquotes failed');
		}
	};

	// Lifecycle methods
	componentDidMount() {
		this.getQuotes();
	}

	render() {
		var quotebox = this.state.quotes.map(entry => {
			const { names, quotes, time } = entry;
			let joke = names.map((name, i) => {
				return (
					<div>
						<h3>
							{name}: {quotes[i]}
						</h3>
					</div>
				);
			});
			return (
				<div key={entry._id}>
					<h1>========</h1>
					<h3>{time}</h3>
					{joke}
				</div>
			);
		});

		// AlertBox
		let alertBox;
		if (this.state.quotes.length === 0) {
			alertBox = <AlertBox />;
		}

		return (
			<div id='quote-box'>
				{quotebox}
				{alertBox}
			</div>
		);
	}
}
export default Quotes;
