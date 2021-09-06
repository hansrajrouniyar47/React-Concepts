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
