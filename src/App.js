import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Card from './Card.js';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">

<Navbar/>

      <h1>CS 230L</h1>
      <h2>Section - 702</h2>
      <p>WVY ID: 800382882</p>
      <p>Hi I am Alex</p>

<Card/>

    </div>
  );
}

export default App;
