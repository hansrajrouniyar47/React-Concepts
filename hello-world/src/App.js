import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';

import list from './components/Namelist';
import Namelist from './components/Namelist';
import StyleSheet from './components/StyleSheet';


function App() {
  return (
    <div className="App">
     <StyleSheet primary={false} />
    </div>
  );
}

export default App;
