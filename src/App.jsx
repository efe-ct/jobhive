import React from 'react'

import reactLogo from './assets/react.svg'
import splash from './assets/unsplash-splash.jpg'
import ladyImg from './assets/unsplash-officelady.jpg'

import { navBarContent, heroImages } from './data/content'
import Navbar from './components/Navbar'
import { LinkEmphasized, SearchButton } from './components/UIComponents'

const App = () => {
  return (
    <>
     {/* Header */}
      <Navbar />

      <section id="hero">
      {/* <section id="hero" style={{ backgroundColor: 'black'}}> */}
        {/* <img style={{ width: '801px', height: '796px', flexShrink: 0 }} src={splash} alt="" /> */}
        {/* <div className="image">
          <img src={ladyImg} alt="" />
        </div> */}

        <div id="heroImage">
          {heroImages.map((image) => (
            <div style={{ zIndex: image.layer, inset: image.inset}} className="image" key={image.id} >
              <img src={image.src} 
              alt={image.description}
              width={image.width}
              height={image.height} />
            </div>
          ))}
        </div>
        <div className="hero__caption">
          <span className="caption">Connecting talent
            <br />with opportunity.
          </span>
          <p>Explore a curated list of jobs from top employers, all in one place.</p>
          <div style={{display: 'flex',}}>
          <SearchButton />
          {/* btn-cta not used */}
          <LinkEmphasized className="btn-cta" style={{fontSize: '1.5rem'}} href="" color="black" title="Explore Jobs" />
          </div>

        </div>
      </section>
    </>
  )
}

export default App