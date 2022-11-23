import React from 'react'
import './footer.css'

const footer = () => {
  return (
  <div className='whole-footer'>
    <div className='footer'>
      <p ><a className='footer-link' href='https://github.com/mattesowah' target='_blank' >GITHUB</a></p>
      <p ><a className='footer-link' href='https://www.instagram.com/mattesowah/'  >INSTAGRAM</a></p>
      <p ><a className='footer-link' href='https://twitter.com/mattesowah' target='_blank' >TWITTER</a></p>
      <p ><a className='footer-link' href='https://medium.com/@a17matte' target='_blank' >MEDIUM</a></p>
      <p ><a className='footer-link' href='https://www.linkedin.com/in/alan-matte-sowah-quarshie-4bb3a8207/' target='_blank' >LINKEDIN</a></p>
      <p ><a className='footer-link' href='https://www.youtube.com/channel/UC3JjgCC1QDwvlJZMF9QYzIg' target='_blank' >YOUTUBE</a></p>
    </div>
    <div className='rights'><span>©MATTESOWAH</span>&nbsp;&nbsp;ALL RIGHTS RESERVED.</div>
  <div className='empty'>   </div>
  </div>
  )
}

export default footer