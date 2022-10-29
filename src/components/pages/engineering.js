import React from 'react'
import './engineering.css'

const engineering = () => {
  return (
    <div className='engineeringpage' >
      <div className='introvideo'><video   loop={true} autoPlay="autoplay"  muted className='renders' src="/assets/y.mp4" type="video./mp4" /></div>
      <div><h1 className='mespeaking'>What I've been up to.</h1></div>
      <div align="center" className='Drender'><img src="/assets/z.png" alt="phone" width="1500" /></div>
    </div>
  )
}

export default engineering
