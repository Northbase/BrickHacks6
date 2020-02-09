import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Password extends Component{
  constructor(){
    super();
    this.state={
        pass : 'demo',
        visible : 'visible'
    }
  }

  uncensor(){
    //unscramble the scrambled text
  }

  proceed(){
    this.setState({visible: "hidden"});
  }

  render(){
    return(
      
    <div className="censor" style= {{visibility : this.state.visible}}>
      <h1>If you know, <br/> you know.</h1>
      <div onClick= {this.proceed} className="toggleButton">Click to Proceed</div>
      
      <div onClick= {this.uncensor} className="shh">Click</div>

    </div>

    );
  }
}
export default Password;
