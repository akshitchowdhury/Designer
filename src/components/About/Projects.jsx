import React from 'react'
import './Projects.css'
const Projects = () => {
    const data = {name : "DevAsura",
topic : "Projects",
statement : "These are my",
check : true}
  return (
<>
<div className='base'>
if(check===true){


<div className='projects'>
    {data.statement} {data.topic}
</div>
}

else{
    <div className='projects'>
    Nothing here
</div>
}
</div>
</>
  )
}

export default Projects