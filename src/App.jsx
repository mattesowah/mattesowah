import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Engineering from './components/engineering/engineering'
import Creativedirection from './components/creativedirection/creativedirection'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Store from './components/store/store'


const App = () => {

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
        <div className='navbar'>
              <Navbar/>
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
              <section className='section-4'id="section-4">
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