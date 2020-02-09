import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
		this.props.boxTracker(this.state.name, this.state.quote);
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
		this.props.boxTracker(this.state.name, this.state.quote);
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
						className='inputBox'
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
			quotes: []
		};
	}

	addBox = () => {
		this.setState({
			// boxes: [...this.state.boxes, <Box boxTracker={this.boxTracker} />]
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
		if (name != '' && !this.state.names.includes(name)) {
			this.setState({
				names: [...this.state.names, name]
			});
		}
		if (quote != '' && !this.state.quotes.includes(quote)) {
			this.setState({
				quotes: [...this.state.quotes, quote]
			});
		}
	};

	handleSubmit = async () => {
		const { names, quotes } = this.state;

		// filter
		try {
			const test = await axios({
				method: 'post',
				url: '/api/quotes/add',
				data: {
					names: names,
					quotes: quotes
				}
			});
			console.log('success');
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
					{/* Add button */}
					<button onClick={this.addBox} className='Button'>
						+
					</button>
					{/* Submit button */}
					{/* <Link
						to={{
							pathname: `/quotes`,
							state: {
								names: this.state.names,
								quotes: this.state.quotes
							}
						}}
						onClick={this.handleSubmit}
					>
						Submit
					</Link> */}
					<button onClick={this.handleSubmit}>Submit</button>
					<button onClick={this.removeBox} className='Button'>
						-
					</button>
				</div>
			</div>
		);
	}
}

export default Home;
