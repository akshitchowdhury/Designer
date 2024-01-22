import React from 'react'
import './Contacts.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Contacts = () => {
  return (

    
    <div className='base'>
    <div className='contacts'>
        <Link to='/https://github.com/akshitchowdhury'>
            
            <a href="https://github.com/akshitchowdhury"><h1>Github </h1></a></Link> 
            <p>Add your Contacts info here</p>     
        {/* <Routes>
          <Route path='https://github.com/akshitchowdhury' element={<Link/>}></Route>
        </Routes> */}
    </div>
    </div>

  )
}

export default Contacts
