import React from 'react'

const Time = () => {

    var time = new Date();

    var hours = time.getHours()
    var minutes = time.getMinutes()
    var seconds = time.getSeconds()

    var format = hours+":"+minutes+":"+seconds

  return (
    <div>Time
    <div className='time'>
    <h1>{format}</h1>

    </div>
    </div>
  )
}

export default Time