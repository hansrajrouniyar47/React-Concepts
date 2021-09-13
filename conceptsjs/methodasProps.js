import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Parent'
    }
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`)
  }
  
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}


//the child component

import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  )
}

//app.js

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import ParentComponent from './components/ParentComponent'


function App() {
  return (
    <div className="App">
     <ParentComponent />
    </div>
  );
}

export default App;



