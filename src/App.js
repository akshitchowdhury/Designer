// import logo from './logo.svg';
// import './App.css';
// 
// import Home from './components/Home/Home.jsx';
// import Contacts from './components/Contacts/Contacts.jsx';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Skills from './components/Skills/Skills.jsx';

// function App() {
//   return ( 
//     // <Router>
//     // <div className="App">

//     // <Link to='/' style={{ position: 'absolute', top: '0', left: '0', padding: '10px' }}>
//     // Home</Link>
//     // <Link to='/contacts' style={{ position: 'absolute', top: '0', left: '30%', padding: '10px' }}>
//     // Contacts
//     // </Link>
//     // <Link to='/skills' style={{position: 'absolute', top: '0', left: '50%', padding: "10px" }}>Skill Tree</Link>
//     // <Navbar/>
//     // <Background/>      
    
    
//     // <Router>
//     // <Switch>
//     // <Route path ='/' element={<Home/>}/>
//     //   <Route path='/contacts' element={<Contacts/>}/>
//     //   <Route path='/skills' element={<Skills/>}/>
//     //   </Switch>
//     //   </Router>
    
    
//     // </div>



//     // </Router>

  
  
//     );
// }

// export default App;
//     // --------------------------------------------------------------------------------------------------------------------------------
  
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts.jsx';
import Skills from './components/Skills/Skills.jsx';
import Background from './components/Bakground/Background.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            {/* Add more navigation links if needed */}
          </ul>
        </nav>
        <hr />
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/skills" element={<Skills/>} />
          
          {/* Add more routes as needed */}
        </Routes>
        <Navbar/>
<Background/> 
      </div>
    </Router>
  );
};

export default App;
