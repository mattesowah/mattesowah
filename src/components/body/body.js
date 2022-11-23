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

const pluginWrapper = () => {
  require('./static/fullpage.offsetSections.min');
};

const body = () => (
  <ReactFullpage
    pluginWrapper = {pluginWrapper}
    anchors={anchors}
    licenseKey= {'KHL56-4R4HI-8K62I-HPR56-QPXNO'}
    lockAnchors={true}
    navigation={false}
    scrollingSpeed={1100}
    loopBottom={true}
    autoScrolling={true}
    scrollBar={true}
    scrollOverflow={false}
    offsetSections={true}
    offsetSectionsKey={'A8E79B94-52CD4FFB-ADC4D0DC-16F52EE9'}
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
    <Link to={`/store`}> 
            <Store/>
      </Link>
    </div>
    <div align="center" className="section">
      <Contact/>
    </div>
    <div className="section" data-percentage="30" data-centered="false">
      <Footer/>
    </div>
  </div>
  )
}}
/>
)

export default body
