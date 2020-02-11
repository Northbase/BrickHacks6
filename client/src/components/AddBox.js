import React, { Component } from 'react';
import axios from 'axios';
import './AddBox.css';

class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			quote: ''
		};
	}

	handleNameChange = async e => {
		await this.setState({
			name: e.target.value
		});
	};

	handleQuoteChange = async e => {
		await this.setState({
			quote: e.target.value
		});
	};

	handleSave = e => {
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
				<form action='' autoComplete='off'>
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

class AddBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxIndex: 0,
			boxes: [],
			names: [],
			quotes: [],
			isDisabled: true,
			status: 'save'
		};
	}

	insertBox = () => {
		this.setState({
			boxIndex: this.state.boxIndex + 1,
			boxes: [
				...this.state.boxes,
				<Box boxTracker={this.boxTracker} key={this.state.boxIndex} />
			]
		});
	};

	removeBox = () => {
		this.setState({
			boxIndex: this.state.boxIndex - 1,
			boxes: this.state.boxes.splice(-1, 1)
		});
	};

	boxTracker = (name, quote) => {
		console.log(`name: ${name}, quote: ${quote}`);
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

			// refresh
			this.setState({
				isDisabled: true,
				status: 'save',
				names: [],
				quotes: []
			});
			this.setState({
				boxes: []
			});

			// triggers in QuotesContainer
			await this.props.getQuotesHandler();
			console.log('added data successfully');
		} catch (err) {
			console.log('submision failed');
		}
	};

	render() {
		return (
			<div className='addBoxContainer'>
				{/* Box */}
				{[...this.state.boxes]}
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
					<button onClick={this.insertBox} className='Button'>
						+
					</button>
				</div>
			</div>
		);
	}
}

export default AddBox;
