import { useRef, useEffect } from 'react'
import { LinkEmphasized, SearchButton } from '@/components/UIComponents'
import { heroImages } from '@/data/content'
import '@/index.css'
import { statisticReport } from '../data/content'

const Home = ({ handleSearch }) => {
  const VIEWBREAKPOINT = 800;
  const mobileCaption = useRef(null);
  const desktopCaption = useRef(null);

  
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= VIEWBREAKPOINT) {
      mobileCaption.current.style.display = 'inline-block';
      // mobileCaption.current.style.marginTop = '100px'
      desktopCaption.current.style.display = 'none';
    } else {
      mobileCaption.current.style.display = 'none';
      desktopCaption.current.style.display = 'inline-block';
    }
  };
  handleResize()
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <>
    {/* Hero Section */}
      <section id="hero" style={{overflow: 'hidden'}}>
        <div id="heroImage">
          {heroImages.map((image) => (
            <div style={{ zIndex: image.layer, inset: image.inset }} className="image" key={image.id} >
              <img src={image.src}
                alt={image.description}
                width={image.width}
                height={image.height} />
            </div>
          ))}
        </div>
        <div className="hero__caption">
          <span ref={desktopCaption} className="caption">Connecting talent
            <br />with opportunity.
          </span>
          <span ref={mobileCaption} className="caption">Welcome to JobHive.</span>
          <p>Employers and Employees, all in one place.</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SearchButton onSearch={handleSearch} />
            {/* btn-cta not used */}
            <LinkEmphasized className="btn-cta" style={{ fontSize: '1.5rem' }} href="" color="black" title="Explore Jobs" />
          </div>
        </div>
      </section>
      {/* Stats section */}
      <section id="statistics">
        <h1>Join Now</h1>
        <div className="statsParent">
          {statisticReport.map((stats) => (
            <div className="stats__card" key={stats.id}>
              <h1>{stats.stats}</h1>
              <p>{stats.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home