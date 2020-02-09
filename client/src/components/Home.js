import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';

class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxIndex: 0,
			name: '',
			quote: ''
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state.name, this.state.quote);
		if (!this.state.names.includes('') && !this.state.quotes.includes('')) {
			this.props.boxTracker(this.state.name, this.state.quote);
		} else {
			console.log('error');
		}
	};

	handleNameChange = async e => {
		await this.setState({
			name: e.target.value
		});
	};

	handleQuoteChange = e => {
		this.setState({
			quote: e.target.value
		});
	};

	handleSave = e => {
		console.log(e.target);
		if (e.target.value !== '') {
			e.target.disabled = true;
		}
		if (this.state.name !== '' && this.state.quote !== '') {
			this.props.boxTracker(this.state.name, this.state.quote);
		}
	};

	render() {
		return (
			<div className='formBox'>
				<form action='' onSubmit={this.handleSubmit} autoComplete='off'>
					{/* name input */}
					<input
						type='text'
						id='name'
						className='inputBox'
						placeholder='name'
						value={this.state.name}
						onChange={this.handleNameChange}
						onBlur={this.handleSave}
					/>
					{/* quote input */}
					<input
						type='text'
						id='name'
						className='inputBox quoteField'
						placeholder='quote'
						value={this.state.quote}
						onChange={this.handleQuoteChange}
						onBlur={this.handleSave}
					/>
				</form>
			</div>
		);
	}
}

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [],
			entries: [],
			names: [],
			quotes: [],
			isDisabled: true,
			status: 'save'
		};
	}

	addBox = () => {
		this.setState({
			boxes: [...this.state.boxes, <Box boxTracker={this.boxTracker} />]
		});
	};

	removeBox = () => {
		let newBoxes = this.state.boxes.splice(-1, 1);
		this.setState({
			boxes: newBoxes
		});
	};

	boxTracker = (name, quote) => {
		console.log(name, quote);
		this.setState({
			isDisabled: false
		});
		this.setState({
			names: [...this.state.names, name],
			quotes: [...this.state.quotes, quote]
		});
	};

	handleSubmit = async () => {
		const { names, quotes } = this.state;
		this.state.isDisabled
			? this.setState({ status: 'save' })
			: this.setState({ status: 'saved' });

		// add to DB
		try {
			const test = await axios({
				method: 'post',
				// url: 'http://localhost:5000/api/quotes/add',
				url: '/api/quotes/add',
				data: {
					names: names,
					quotes: quotes
				}
			});

			// disable submit button
			this.setState({
				isDisabled: true,
				status: 'save'
			});
			this.setState({
				boxes: []
			});
			console.log('added data successfully');
		} catch (err) {
			console.log('submision failed');
		}
	};

	render() {
		const boxes = this.state.boxes;
		return (
			<div className='homeContainer'>
				{/* Box */}
				{[...boxes]}
				<div className='buttons'>
					{/* Remove Button */}
					<button onClick={this.removeBox} className='Button'>
						-
					</button>
					{/* Submit button */}
					<button
						onClick={this.handleSubmit}
						className='saveButton'
						disabled={this.state.isDisabled ? true : false}
					>
						{this.state.status}
					</button>
					{/* Add button */}
					<button onClick={this.addBox} className='Button'>
						+
					</button>
				</div>
			</div>
		);
	}
}

export default Home;
