import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const about = () => {
 


  return (
    <>
      <div className='aboutpage'>
        <img className="aboutanimation" id="aboutanimation" src="/assets/a.jpg" alt="aboutanimation" />
      </div>
      <div align="center" className='scrolldownaction'>
        <h5>SCROLL DOWN</h5>
      </div>
      <div align="center"  className='biocontainer'>
       <div className='bio'>
        <div>
          <h4 className='biotext'>Alan Matte Sowah Quarshie known profesionally as Matte Sowah is the 24-year-old Founder of software collective A17labs and social app Heatmap.</h4>
          <h4 className='biotext2'>Matte Sowah is a Programmer, Creative Director and Content Creator with a habit of sharing origin stories regarding his Code, Design and Development.</h4>
          <h4 className='biotext3'> Matte and A17labs strive to continue building experiences that drive content creation culture especially amongst the Gen Z subset.</h4>
        </div>
      </div>
  
     <div align="center" className='bio'>
     </div>
    </div>
  </>
  )
}

export default about
