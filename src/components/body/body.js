import React from 'react'
import About from './about/about'
import Engineering from './engineering/engineering'
import Creativedirection from './creativedirection/creativedirection'
import Store from './store/store'
import Contact from './contact/contact';
import Footer from '../footer/footer';
import { Link } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["about", "engineering", "creativedirection", "store", "contact", "social" ];

const body = () => (
  <ReactFullpage
    anchors={anchors}
    lockAnchors={true}
    navigation={false}
    scrollingSpeed={1200}
    loopBottom={true}
    autoScrolling={true}
    scrollBar={true}
    scrollOverflow={false}
    offsetSections={true}
    offsetSectionsKey={'Y29kZXBlbi5pb196MDZiMlptYzJWMFUyVmpkR2x2Ym5NPWhPNA=='}
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#fffff","#fffff","#fffff" ]}
    easing={"easeOutCirc"}
    easingcss3={"ease"}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

  return (
    <div>
    <div align="center" className="section">
    <Link to={`/about`}> 
          <About/>
      </Link>
    </div>
    <div  className="section">
      <Link align="center" to={`/engineering`}> 
          <Engineering/>
      </Link>
    </div>
    <div align="center" className="section">
      <Link to={`/creativedirection`}> 
            <Creativedirection/>
      </Link>
    </div>
    <div  className="section">
      <Store/>
    </div>
    <div align="center" className="section">
      <Contact/>
    </div>
    <div data-percentage="50"  className="section">
      <Footer/>
    </div>
  </div>
  )
}}
/>
)

export default body
