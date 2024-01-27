import React from 'react'
import './Projects.css'
const Projects = () => {
    const data = {name : "DevAsura",
topic : "Projects",
statement : "These are my"}
  return (
<>
<div className='base'>
<div className='projects'>
    {data.statement} {data.topic}
</div>
</div>
</>
  )
}

export default Projects