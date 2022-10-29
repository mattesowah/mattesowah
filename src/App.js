
import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import { Routes ,Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';

import { Projects } from "./projects";

import Aboutpage from './components/pages/about';
import Engineeringpage from './components/pages/engineering';
import Creativedirectionpage from './components/pages/creativedirection';
import Storepage from './components/pages/store';
import Homepage from './components/body/body';

const App = () => {


const [query, setQuery] = useState("");

  


  console.log(query)



window.onload=function(){
  var search = document.getElementById('searchicon');
  var like = document.getElementById('likeicon');
  var modalBg = document.getElementById('modal-bg');
  var likemodalBg = document.getElementById('likemodal-bg')
  var body = document.querySelector("html, body");
  var modalClose = document.getElementById('modal-close');
  var likemodalClose = document.getElementById('likemodal-close');
  var logo = document.getElementById('logo');
  var input = document.getElementById('input');
  var lists = document.getElementById('lists');
  var portrait = document.getElementById('portrait');

portrait.addEventListener('click', function(){
  portrait.classList.add('zoom-out')
})   

logo.addEventListener('click', function(){
  window.location.reload();
  window.scrollTo(0, 0);
}); 
search.addEventListener('click' ,function(){
    modalBg.classList.add('bg-active')
    body.classList.add('modal-open')
});
modalClose.addEventListener('click' ,function(){
  modalBg.classList.add('bg-inactive')
  input.value = ""
  lists.classList.add('hidelists')
  body.classList.remove('modal-open')
  setTimeout(function() {
    modalBg.classList.remove('bg-active')
    modalBg.classList.remove('bg-inactive')
    
}, 500)
});
like.addEventListener('click' ,function(){
  likemodalBg.classList.add('bg-active')
  body.classList.add('modal-open')
});
likemodalClose.addEventListener('click' ,function(){
  likemodalBg.classList.add('bg-inactive')
  body.classList.remove('modal-open')
setTimeout(function() {
  likemodalBg.classList.remove('bg-active')
  likemodalBg.classList.remove('bg-inactive')
  
}, 500)
});
input.addEventListener('input',function(){
  lists.classList.add('lists-active')
});
function myFunction() {
  var query = document.getElementById('input').value;

  // this wil grab all <li> elements from all <ul> elements on the page
  // however, you will want to specify a unique attribute for only the elements you wish to include
  var elements = document.querySelectorAll('a');

  let status = query==="" ? "none" : "block"
  document.getElementById("lists").style.display = status;

  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    if (el.toLocaleLowerCase.indexOf(query) !== -1 )
      el.style.display = 'block';
    else
      el.style.display = 'none';
  }

}

window.addEventListener('keydown', myFunction)





}



  
  
  return (
    <div className='App' id="app">
      <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/about' element={<Aboutpage />} />
          <Route exact path='/engineering' element={<Engineeringpage />} />
          <Route exact path='/creativedirection' element={<Creativedirectionpage />} />
          <Route exact path='/store' element={<Storepage />} />
        </Routes>
               
 
      
      <div className='modal-bg' id='modal-bg'>
            <div className='modal' id="modal">
             <input id="input" type="text" placeholder='SEARCH' onChange={e=> setQuery(e.target.value)}/>
              <ul className='lists' id='lists'>
                {Projects.filter(project=>project.name.toLocaleLowerCase().includes(query)
                ).map((project) => (
                <a href="/"><li key={project.id} className='searchResults'>{project.name}</li></a>
                ))}
              </ul>
              <span className="modal-close" id="modal-close">X</span>
            </div>  
      </div>

      <div className='likemodal-bg' id='likemodal-bg'>
            <div className='likemodal'>
              <h5 className='nolikes'>YOU HAVE NO LIKED ITEMS</h5>
              <span className="likemodal-close" id="likemodal-close">X</span>
            </div>  
      </div>
          
          
   
           
    </div>
  );

}

export default App;