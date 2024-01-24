import React, { useState } from 'react'



const Checkboxes = () => {

    const [isChecked, setChecked] = useState(false)

    const checker = ()=>{
        if(isChecked==false){
            setChecked(true)
        }
    }
    return (
    <label>
        <input type="checkbox" checked={isChecked} onChange={checker} />
    </label>
  )
}

export default Checkboxes
