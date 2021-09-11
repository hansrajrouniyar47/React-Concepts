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
