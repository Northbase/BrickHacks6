import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Quotes from './Quotes';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<Router>
				<ul className='navbar'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/quotes'>Quotes</Link>
					</li>
				</ul>

				<Route exact path='/' component={Home} />
				<Route exact path='/quotes' component={Quotes} />
			</Router>
		);
	}
}

export default Navbar;
