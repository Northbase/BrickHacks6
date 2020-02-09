import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import './style.css';

class QuotesContainer extends Component {
	constructor() {
		super();
		this.state = {
			quotes: []
		};
	}

	componentDidMount() {
		this.getQuotes();
	}

	// componentWillUpdate() {
	// this.setState({ quotes: [] });
	// this.getQuotes();
	// }

	removeQuote = async e => {
		// console.log(e.target);
		await axios({
			method: 'delete',
			// url: `http://localhost:5000/api/quotes/delete/${e.target.id}`,
			url: `/api/quotes/delete/${e.target.id}`,
			data: {
				params: e.target.id
			}
		});

		await this.getQuotes();
	};

	getQuotes = async () => {
		const Quotes = await axios({
			method: 'get',
			// url: `http://localhost:5000/api/quotes`
			url: `/api/quotes`
		});
		// console.log(Quotes.data);
		await this.setState({ quotes: [...Quotes.data] });
	};

	scramble(words) {
		var patt = /[^eariotnsEARIOTNS]/g;
		var result = words.match(patt);

		return words;
		// return result;
	}

	render() {
		let boxQuote_key;
		var quotebox = this.state.quotes.map(entry => {
			var output = [];
			var num = entry.names.length;
			boxQuote_key = entry._id;

			for (var i = 0; i < num; i++) {
				//going through index of every name
				console.log(entry);
				output.push(
					<div className='utterance'>
						<h3 className='name'> {this.scramble(entry.names[i])}: </h3>
						<p className='saying'> {this.scramble(entry.quotes[i])} </p>
					</div>
				);
			}
			return (
				<div className='individualQuote' key={boxQuote_key}>
					{output}
					<hr className='edge' />
					<div className='delete' id={boxQuote_key} onClick={this.removeQuote}>
						Delete
					</div>
				</div>
			);
		});

		return <div className='quote-box'>{quotebox}</div>;
	}
}
export default QuotesContainer;
//render(<QuotesContainer/>, document.getElementById('root'));
