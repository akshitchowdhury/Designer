import logo from './logo.svg';
import './App.css';
import Background from './components/Bakground/Background.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">

    <Home></Home>
    <Link to="/contacts">
    Contacts
    </Link>
    <Navbar/>
    <Background/>      
    
    
    <Routes>
      <Route path='/contacts' Component={Contacts}>
        
      </Route>
      </Routes>
     
    
    
    </div>



    </Router>
  );
}

export default App;
