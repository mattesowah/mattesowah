import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
     <div>
       <div className='icons'>
        <div className="logo1">
        <img className="logo" src="/assets/logo.svg" alt="Logo"/>
       </div>

      <div className='search'>
        <img className='searchicon' src="/assets/search.svg" alt="Search"/>  
      </div> 
    </div>
       
      <div className='navlinks'>
        <p className='navitem'><a className='nav-section'  href='https://github.com/mattesowah' >ABOUT</a></p>
        <p className='navitem'><a className='nav-section'  href='https://github.com/mattesowah' >ENGINEERING</a></p>
        <p className='navitem'><a className='nav-section'  href='https://github.com/mattesowah' >CREATIVE DIRECTION</a></p>
        <p className='navitem'><a className='nav-section'  href='https://github.com/mattesowah' >STORE</a></p>
        <p className='navitem'><a className='nav-section'  href='https://github.com/mattesowah' >CONTACT</a></p>
      </div>
        
       </div>


  )
}

export default navbar