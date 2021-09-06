//So writing a functional component let's say a h1 tag with Hello Hansraj
//so in component folder you make a greet.js file
import React from 'react'

function Greet(){
  return <h1>Hello Hansraj</h1>
}

export default Greet

//and then app.js you import that

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;

//Suppose if you want not to export as default rather as name export you have to mandatorily import as name import else it won't work 
//like in above one even if you change import name from Greet to some other in line 15 like as MyComp and in line 20 use same MyComp, it will work while in name import it won't work;

import React from 'react'

export const Greet = () => <h1>HEllo Hansraj</h1>;

//and in app.js

import logo from './logo.svg';
import './App.css';
import { Greet }  from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;