import React from 'react'
import { Link } from "react-router-dom";
import './store.css'

const store = () => {
  return (
 <div>  
    <div>
      <video   loop={true} data-autoplay data-keepplaying   muted className='store' src="/assets/store1.mp4" type="video./mp4" />
      <div align="center"  classname="shopnow" ><h3 >PRE-ORDER  NOW</h3></div>
    </div>
</div> 
  )
}

export default store