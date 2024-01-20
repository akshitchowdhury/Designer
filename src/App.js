import logo from './logo.svg';
import './App.css';
import Background from './components/Bakground/Background.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Contacts from './components/Contacts/Contacts.jsx';

function App() {
  return (
    <div className="App">

    <Home></Home>
    <Contacts/>

    <Navbar/>
    <Background/>      
    </div>
  );
}

export default App;
