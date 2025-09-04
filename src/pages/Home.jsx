import React from 'react';
import { useNavigate } from 'react-router-dom';
// styles consolidated in index.css
import { SearchBar, MobileSearchBox, Button } from '../components/ui.jsx';
import CountUp from 'react-countup';

const Home = () => {
  const navigate = useNavigate();
  const handleSearch = ({ q, cat, lvl, loc, sort }) => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (cat) params.set('cat', cat);
    if (lvl) params.set('lvl', lvl);
    if (loc) params.set('loc', loc);
    if (sort) params.set('sort', sort);
    navigate(`/jobs?${params.toString()}`);
  };
  const stats = [
    { label: 'Job Listings', end: 202, duration: 5 },
    { label: 'Active Jobs', end: 104, duration: 5 },
    { label: 'Companies', end: 20, duration: 5 },
    { label: 'Successful Hires', end: 94, duration: 5, suffix: '%' },
  ];

  return (
    <>
      <div className="hero" style={{ position: 'relative' }}>
        <div className="bg-grid" aria-hidden="true" />
        <div className="hero-text">
          <span className="your">
            Your <span className="hanalei">career</span> path starts here
          </span>
        </div>
        <div className="focal-point">
          {/* Desktop/tablet search */}
          <div className="search-desktop-only">
            <SearchBar onSearch={handleSearch} />
          </div>
          {/* Mobile search */}
          <div className="search-mobile-only">
            <MobileSearchBox onSearch={handleSearch} />
            <div className="mobile-go-jobs">
              <Button isLink to="/jobs" type="default" state="selected">
                Go to Jobs
              </Button>
            </div>
          </div>
          <div className="container-wrapper">
            <div className="container">
              <img className="hero-img" alt="" src="hero-img.png" />
            </div>
          </div>
        </div>
        <img className="vector-bg" alt="" src="/Vector.svg" />
      </div>
      <section className="stats-section">
        <h2 className="stats-title">
          Your #1 Job Listing <span className="hanalei">Page</span>
        </h2>
        <div className="stats-grid"  style={{display: 'flex', flexDirection: 'column'}}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">
                <CountUp start={0} end={stat.end} duration={stat.duration} suffix={stat.suffix || ''} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
