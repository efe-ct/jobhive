import React from 'react'
import { LinkEmphasized, SearchButton } from '@/components/UIComponents'
import {  heroImages } from '@/data/content'
import '@/index.css'

const Home = ({ handleSearch }) => {
  return (
    <>
    <section id="hero">
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
          <div style={{display: 'flex', alignItems: 'center'}}>
          <SearchButton onSearch={handleSearch} />
          {/* btn-cta not used */}
          <LinkEmphasized className="btn-cta" style={{fontSize: '1.5rem'}} href="" color="black" title="Explore Jobs" />
          </div>

        </div>
      </section>
      <section id="statistics">
        <h1></h1>
      </section>
    </>
  )
}

export default Home