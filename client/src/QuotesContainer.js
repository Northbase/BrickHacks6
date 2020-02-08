import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class QuotesContainer extends Component {
  constructor() {
    super();
    this.state = {
       quotes: [
         {names : "A,B",
          quote: "hi"},
          {names : "C,D",
          quote: "ahhhh"},
          {names : "E,F",
          quote: "bye"}
       ]
    //quotes: ["a", "b", "c"]
    };
  }

  componentDidMount(){
    console.log(this.state.quotes);
    
  }

  render() {

    var quotebox = this.state.quotes.map( entry => {
      return ( 
        <div className="quote-output"> 
          <h3> {entry.names} </h3>
          <p>{entry.quote}</p>
        </div>   
        )
      } 
    );

    return (
      <div id="quote-box">
        {quotebox}
      </div>
    );
  }
}
export default QuotesContainer;
//render(<QuotesContainer/>, document.getElementById('root'));  
