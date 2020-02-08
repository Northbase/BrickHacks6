import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import QuotesContainer from './QuotesContainer';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello/>
        <QuotesContainer/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
