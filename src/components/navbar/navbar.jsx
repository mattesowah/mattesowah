import React from 'react'
import './navbar.css'



const navbar = () => {
  return (
     <div>
       <div className='icons'>
        <div className="logo1">
        <img style={{filter: "invert(99%) sepia(100%) saturate(0%) hue-rotate(246deg) brightness(104%) contrast(102%)"}} className="logo" src="/assets/logo.svg" alt="Logo"/>
       </div>

      

      <div className='like'>
        <img style={{filter: "invert(99%) sepia(100%) saturate(0%) hue-rotate(246deg) brightness(104%) contrast(102%)"}} className='likeicon' src="/assets/like.svg" alt="Like"/>
      </div>

      <div className='search'>
        <img style={{filter: "invert(99%) sepia(100%) saturate(0%) hue-rotate(246deg) brightness(104%) contrast(102%)"}} className='searchicon' src="/assets/search.svg" alt="Search"/>    
      </div> 

    </div>
       
      <div className='navlinks'>
        <p className='navitem'><a style={{color: "white"}} className='nav-section'  href='https://github.com/mattesowah' >ABOUT</a></p>
        <p className='navitem'><a style={{color: "white"}} className='nav-section'  href='https://github.com/mattesowah' >ENGINEERING</a></p>
        <p className='navitem'><a style={{color: "white"}}className='nav-section'  href='https://github.com/mattesowah' >CREATIVE DIRECTION</a></p>
        <p className='navitem'><a style={{color: "white"}}className='nav-section'  href='https://github.com/mattesowah' >STORE</a></p>
        <p className='navitem'><a style={{color: "white"}}className='nav-section'  href='https://github.com/mattesowah' >CONTACT</a></p>
      </div>
        
       </div>


  )
}

export default navbar