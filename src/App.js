import logo from './logo.svg';
import './App.css';
import Background from './components/Bakground/Background.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
    
    <Switch>

      <Route path='/contacts'>
      <Contacts/>  
      </Route>
    </Switch>
    
    
    
    </div>



    </Router>
  );
}

export default App;
