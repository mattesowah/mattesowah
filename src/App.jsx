import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import About from './components/about/about'
import Engineering from './components/engineering/engineering'
import Creativedirection from './components/creativedirection/creativedirection'
import Contact from './components/contact/contact';
import Footer from './components/footer/footer'
import Store from './components/store/store'


const App = () => {
 const myRef = useRef();
 const [visibleElement, setvisibleElement] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setvisibleElement(entry.isIntersecting)
    })
    observer.observe(myRef.current);
  }, [])
 


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
    <>
          
     

      
          
          <div className="scroll-progress" id="scroll-progress" style={{ width: `${scrollTop}%` }} ></div>
        
        <div className='container'id="container">
        <div className='navbar' id="navbar">
        <div>
       <div className='icons'>
        <div className="logo1">
        <img className="logo" src="/assets/logo.svg" alt="Logo"/>
       </div>

      

      <div className='like'>
        <img  className='likeicon' src="/assets/like.svg" alt="Like"/>
      </div>

      <div className='search'>
        <img className='searchicon' src="/assets/search.svg" alt="Search"/>    
      </div> 

    </div>
       
     
      <div className='navlinks'>
        <p ref={myRef}  className='navitem'><a  className='nav-section' href='https://github.com/mattesowah' >ABOUT</a></p>
        <p className='navitem'><a  className='nav-section'  href='https://github.com/mattesowah' >ENGINEERING</a></p>
        <p className='navitem'><a className='nav-section'  href='https://github.com/mattesowah' >CREATIVE DIRECTION</a></p>
        <p className='navitem'><a className='nav-section'  href='https://github.com/mattesowah' >STORE</a></p>
        <p className='navitem'><a className='nav-section'  href='https://github.com/mattesowah' >CONTACT</a></p>
      </div>
        
       </div>
            </div>
          <section className='section-1'id="section-1">
              <About/>
            </section>
            <section className='section-2'id="section-2">
              <Engineering/>
            </section> 
             <section className='section-3'id="section-3">
               <Creativedirection/>
              </section>
              <section ref={myRef} className='section-4'id="section-4">
                <Store/>
              </section> 
              <section className='section-5'id="section-5">
                <div className='contact-section'>
                    <Contact/>
                  </div>  
                  <div className='footer-section'>
                    <Footer/>
                  </div>
                </section>
               
              
            </div> 
        
           
    </>
  )
}

export default App