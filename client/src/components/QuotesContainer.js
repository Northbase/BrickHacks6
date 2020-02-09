import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class QuotesContainer extends Component {
  constructor() {
    super();
    this.state = {
       quotes: [
         {names : ["Sidney"],
          quote: ["I don't have a bucket list because I have no plans to die"]},  

          {names : ["Rahul", "Noelle"],
          quote: ["Now we're one big kinky family!", "And Nick is the daddy"]},

          {names : ["Rahul"],
          quote: ["Bisexual livers are made of steel."]},
          {names : ["Sidney"],
          quote: ["I don't have a bucket list because I have no plans to die"]},  

          {names : ["Rahul", "Noelle"],
          quote: ["Now we're one big kinky family!", "And Nick is the daddy"]},

          {names : ["Rahul"],
          quote: ["Bisexual livers are made of steel."]}
       ]
    //quotes: ["a", "b", "c"]
    };
  }

  componentDidMount(){
    console.log(this.state.quotes);
  }

  scramble(words){
    var patt = /[^eariotnsEARIOTNS]/g;
    var result = words.match(patt);

    return result;
  }

  render() {

    var quotebox = this.state.quotes.map( entry => {

      var output = [];
      var num = entry.names.length;
      
      for(var i = 0; i< num; i++){ //going through index of every name
        
        output.push(
          <div className="utterance">
            <h3 className = "name"> {this.scramble(entry.names[i])}: </h3>
            <p className="saying"> {this.scramble(entry.quote[i])} </p>
            
          </div>
        );
      }

      return ( 
        <div className="individualQuote">
          {output}
          <hr className="edge"/>
          <div className="delete" onClick="">Delete</div>
        </div>
        
        )
      } 
    );

    return (
      <div className="quote-box">
        {quotebox}
      </div>
    );
  }
}
export default QuotesContainer;
//render(<QuotesContainer/>, document.getElementById('root'));  
