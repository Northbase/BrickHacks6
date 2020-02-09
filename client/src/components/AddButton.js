import React, { Component } from 'react';
import Home from './Home';
import './style.css';

class QuotesContainer extends Component {
	constructor() {
		super();
		this.state = {
			symbol: '+',
			visible: 'hidden'
		};
	}

	switcharoo = () => {
		var chara = this.state.symbol;
		var canSee = this.state.visible;
		if (chara === '+') {
			chara = '×';
			canSee = 'visible';
		} else {
			chara = '+';
			canSee = 'hidden';
		}
		this.setState({ symbol: chara });
		this.setState({ visible: canSee });
	};

	render() {
		return (
			<div>
				<div className='add-plate' style={{ visibility: this.state.visible }}>
					<div className='add-form'>
						<h2>Add a Quote</h2>
						<Home />
					</div>
				</div>

				<div className='btn' onClick={this.switcharoo}>
					<p>{this.state.symbol}</p>
				</div>
			</div>
		);
	}
}
export default QuotesContainer;
