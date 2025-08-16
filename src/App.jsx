import {  heroImages } from './data/content'
import Navbar from './components/Navbar'
import { LinkEmphasized, SearchButton } from './components/UIComponents'
import { useState } from 'react'

const App = () => {

  const [query, setQuery] = useState('');

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);

    console.log("The user wants to search for " + searchTerm)
  }

  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (pageName) => {
    setCurrentPage(pageName);
    console.log(`Navigating to " + ${pageName}`);
  }

  return (
    <>
     {/* Header */}
      <Navbar onNavigate={handleNavigate} />

      {currentPage === 'about' && <h2>About Us</h2> }
      {currentPage === 'services' && <h2>Services</h2> }
      {currentPage === 'contact' && <h2>Contact Us</h2> }



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
          <div style={{display: 'flex', alignItems: 'center'}}>
          <SearchButton onSearch={handleSearch} />
          {/* btn-cta not used */}
          <LinkEmphasized className="btn-cta" style={{fontSize: '1.5rem'}} href="" color="black" title="Explore Jobs" />
          </div>

        </div>
      </section>
    </>
  )
}

export default App