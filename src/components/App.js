import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylings/App.css';

import  Display from './Display'
import Button from './Button'
class App extends Component {
  render() {
    const buttons=[];
    for(let i=0; i<10;i++){
      buttons.push(<Button />)
    }
    return (
      <div className="test">

        <Display  />

      </div>
    );
  }
}

export default App;
