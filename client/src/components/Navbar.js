import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Quotes from './Quotes';
import QuotesContainer from './QuotesContainer';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<Router>
				{/* <Route exact path='/' component={Home} />
				<Route exact path='/quotes' component={Quotes} /> */}

				<Route exact path='/' component={QuotesContainer} />
			</Router>
		);
	}
}

export default Navbar;
