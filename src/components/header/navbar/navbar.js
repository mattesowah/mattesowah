import React, { useEffect, useState, useRef } from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  

    function changeNav(){
        var navbar = document.getElementById('navbar');
        var scrollValue = window.scrollY;
        if(scrollValue < 2295){
          navbar.classList.remove('navColor')
        } else{
            navbar.classList.add('navColor')
        }
        console.log(scrollValue)
      
        if(scrollValue < 3068 ){
          navbar.classList.remove('navColor2')
        } else{
            navbar.classList.add('navColor2')
        }
        console.log(scrollValue)
      
      
      }
      
      window.addEventListener('scroll', changeNav)

     
     
     
     
      const menuItems =[
    
        {
          id: 1,
          title: "about"
        },
        {
          id: 2,
          title: "engineering"
        },
        {
          id: 3,
          title: "creative direction"
        },
        {
          id: 4,
          title: "store"
        },
        {
          id: 5,
          title: "contact"
        }
            ]



            const [scrollTop, setScrollTop] = useState(0);

            const onScroll = () => {
              const winScroll = document.documentElement.scrollTop;
              const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
           
              const scrolled = (winScroll / height) * 100;
          
              setScrollTop(scrolled)
           
            }
          
          
            useEffect(() => {
              window.addEventListener("scroll", onScroll);
          
              return () => window.removeEventListener("scroll", onScroll);
            }, []);    


  return (
    <nav className='navbar' id='navbar' >
    <div className="scroll-progress" id="scroll-progress" style={{ width: `${scrollTop}%` }} ></div>
    <div className="logo1">
    <img className="logo" id="logo" src="/assets/logo.svg" alt="Logo"/>
   </div>
<div className='allicons'>
  <div align="right" className='search'>
      <img className='searchicon' id='searchicon' src="/assets/search.svg" alt="Search"/>    
    </div> 

    <div align="right" className='like'>
        <img  className='likeicon' id='likeicon' src="/assets/like.svg" alt="Like"/>
    </div>

    <div align="right" className='bag'>
      <img className='bagicon' id='bagicon' src="/assets/store.svg" alt="bag"/>    
    </div> 
</div>
   


  

      <ul className='links'>
        {menuItems.map(menu => (
        <li className='link'>
          <Link to={menu.title} smooth={true} duration={500}  >{menu.title}</Link>
        </li>))}
      </ul>
    </nav>
  )
}

export default Navbar
