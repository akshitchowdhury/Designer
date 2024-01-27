import React from 'react'
import './Projects.css'
import Checker from './Checker'


const Projects = () => {
    const data = {name : "DevAsura",
topic : "Projects",
false_statement : "Not Working",
check : true,
content : <Checker/> }
let indicator;
if(data.check===true){
   indicator = data.content; 
}

else{
indicator=data.false_statement;
}

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