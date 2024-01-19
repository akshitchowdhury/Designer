import logo from './logo.svg';
import './App.css';
import Background from './components/Bakground/Background.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';

function App() {
  return (
    <div className="App">

    <Home></Home>
    <Navbar/>
    <Background/>      
    </div>
  );
}

export default App;
