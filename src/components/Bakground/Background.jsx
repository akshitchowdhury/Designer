import React from 'react'
import bkgd from '../../assets/bkgd.jpeg'

const Background = () => {
  return (
    <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        backgroundImage: `url(${bkgd})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        opacity: 0.5, // Adjust the opacity as needed
      }}>
      
    </div>
  )
}

export default Background
