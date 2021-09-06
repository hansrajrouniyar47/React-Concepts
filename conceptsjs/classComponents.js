//similar to ES6 classes, we have class components, it will take props similar to functional components and give HTML(jsx)

//Apart from props, class components can maintain private internal state which is it can maintain some information which is private to that components and use that information to desribe user interface

import React, { Component} from 'react'

class Welcome extends Component{
  render() {
    return <h1>Welcome Home</h1>
  }
}

export default Welcome

//and in app.js

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
