

//in functional component you pass props as parameter to function and later with its value as say props.name or props.value, you can use of that
//in class component you do not have any parameters to pass that way
//therefore what you do is
//you have reserved keyword in class component which is this.props and you work this way only

//props are immutable that is you cannot change the value of props in your function or class

//props with functional component
import React from 'react'

const Greet = props => {
  return(
    <h1>Hello {props.name}, You earned {props.grade}</h1>
  )
  
};

export default Greet

//props with class component
import React, { Component} from 'react'

class Welcome extends Component{
  render() {
    return <h1>Welcome to {this.props.countryName}</h1>
  }
}

export default Welcome

//main function i.e app.js

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Hansraj" grade="A+"/>
      <Welcome countryName="Nepal"  />
    </div>
  );
}

export default App;



