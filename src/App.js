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
import Skills from './assets/Skills/Skills.jsx';

function App() {
  return (
    <Router>
    <div className="App">

    <Home></Home>
    <Link to="/contacts" style={{ position: 'absolute', top: '0', left: '0', padding: '10px' }}>
    Contacts
    </Link>
    <Link to='/skills' style={{position: 'absolute', top: '0', left: '30%', padding: "10px" }}>Skill Tree</Link>
    <Navbar/>
    <Background/>      
    
    
    <Routes>
      <Route path='/contacts' Component={Contacts}>
        
      </Route>
      <Route path='/skills' Component={Skills}>

      </Route>
      </Routes>
     
    
    
    </div>



    </Router>
  );
}

export default App;
