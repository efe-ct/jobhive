import React from 'react'

import reactLogo from './assets/react.svg'
import splash from './assets/unsplash-splash.jpg'
import ladyImg from './assets/unsplash-officelady.jpg'

import { navBarContent, heroImages } from './data/content'

const App = () => {
  return (
    <>
     {/* Header */}
      <header className="">
        <div className="navbar">
          <span>
            <img src={reactLogo} alt="" />
            <a href="">JobHive</a>
          </span>

          <input type="text" placeholder="Search for Jobs, Companies or keywords..." />

          <nav className="navbar__links">
            <a href="">{navBarContent[0].title}</a>
            <a href="">{navBarContent[1].title}</a>
            <a href="">{navBarContent[2].title}</a>
            <a href="">{navBarContent[3].title}</a>
            <a href="">{navBarContent[4].title}</a>
          </nav>
        </div>
      </header>

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
        
        
        {/* <div className="hero__caption">
          <span>Find a Job that suits <br /> your interests and skills</span>
        </div> */}
        {/* <div style={{ width: '801px', height: '796px', flexShrink: 0 }} className="image" ></div> */}
      </section>
    </>
  )
}

export default App