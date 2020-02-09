import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import QuotesContainer from './QuotesContainer';
import AddButton from './AddButton';

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
      <div style= {{height: "10vh"}}>
        <Hello />
        <QuotesContainer/>
        <AddButton/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
