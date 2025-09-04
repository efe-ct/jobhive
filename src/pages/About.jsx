import React from 'react'
// styles consolidated in index.css

const About = () => {
  return (
    <div className="about-page" style={{ position: 'relative' }}>
      {/* Background overlays */}
      <div className="bg-grid" aria-hidden="true" />
      <img className="vector-bg" alt="" src="/Vector.svg" />

      {/* Header */}
      <header className="about-header">
        <h1 className="about-title">
          <span>Learn <span className="hanalei">ABOUT US</span></span>

        </h1>
      </header>

      {/* Content card */}
      <section className="about-card">
        <h2 className="section-heading">About JobHive</h2>
        <p>
          JobHive is a sleek and responsive Single Page Application (SPA) built to simplify the job search
          experience for modern professionals.
        </p>
        <p>
          Whether you're a seasoned expert or just starting your career journey, JobHive offers a streamlined
          interface to explore, filter, and engage with job opportunities across diverse industries.
        </p>
        <p>
          We believe that finding the right job shouldn't feel like a maze. That's why JobHive combines intuitive
          design with powerful search and filter tools, making it easier than ever to discover roles that match your
          skills, goals, and lifestyle.
        </p>

        <h3 className="section-heading">What Makes JobHive Different?</h3>
        <ul className="about-list">
          <li>
            <strong>Categorized Listings:</strong> Browse jobs by industry — from IT & Software to Healthcare and
            Government.
          </li>
          <li>
            <strong>Smart Search & Filters:</strong> Refine your results by keyword, company, location, experience
            level, and more.
          </li>
          <li>
            <strong>Detailed Job Views:</strong> Dive into full job descriptions, company insights, qualifications,
            and perks.
          </li>
          <li>
            <strong>Visual Application Flow:</strong> While applications are UI-only, the experience mimics real-world
            job portals.
          </li>
          <li>
            <strong>Save & Bookmark:</strong> Keep track of interesting roles with our “Saved Jobs” feature (UI only).
          </li>
          <li>
            <strong>Feedback & Contact:</strong> Share your thoughts, rate the platform, or reach out via our contact
            section.
          </li>
        </ul>

        <h3 className="section-heading">Our Mission</h3>
        <p>
          To empower job seekers with a fast, user-friendly platform that makes career discovery feel less like a
          chore and more like an opportunity. JobHive is built with simplicity, accessibility, and responsiveness at
          its core — ensuring a seamless experience across devices.
        </p>
        <p>
          Whether you're hunting for your next big break or just browsing what's out there, JobHive is your hive of
          opportunity.
        </p>
      </section>
    </div>
  )
}

export default About