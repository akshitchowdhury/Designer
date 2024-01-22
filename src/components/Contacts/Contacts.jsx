import React from 'react'
import './Contacts.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
react-Router
const Contacts = () => {
  return (

    <Router>
    <div className='base'>
    <div className='contacts'>
        <Link to='/https://github.com/akshitchowdhury'>
            <h1>Github </h1></Link>
            
            <p>Add your Contacts info here</p>     
        <Routes>
          <Route path='https://github.com/akshitchowdhury' element={<div/>}></Route>
        </Routes>
    </div>
    </div>
</Router>
  )
}

export default Contacts
