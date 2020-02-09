import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import QuotesContainer from './QuotesContainer';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<Router>
				<Route exact path='/' component={QuotesContainer} />
			</Router>
		);
	}
}

export default Navbar;
