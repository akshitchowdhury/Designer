import React from 'react'
import './Projects.css'
import Checker from './Checker'


const Projects = () => {
    const data = {name : "DevAsura",
topic : "Projects",
false_statement : "Not Working",
check : false,
content : <Checker/> }

let indicator = data.check? data.content : data.false_statement;

return (
<>
<div className='base'>

<div className='projects'>
    
    {indicator}
</div>

</div>
</>
  )
}

export default Projects