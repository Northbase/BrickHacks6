import React, { Component } from 'react';
import AddBox from './AddBox';
import './style.css';

class AddButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			symbol: '+',
			visible: 'hidden'
		};
	}

	componentDidMount() {
		this.props.getQuotesHandler();
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
						<AddBox getQuotesHandler={this.props.getQuotesHandler} />
					</div>
				</div>

				<div className='btn' onClick={this.switcharoo}>
					<p>{this.state.symbol}</p>
				</div>
			</div>
		);
	}
}
export default AddButton;
