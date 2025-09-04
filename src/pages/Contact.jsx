import React from 'react'
// styles consolidated in index.css

const Contact = () => {
  return (
    <div className="contact-page" style={{position:'relative'}}>
      {/* Background grid overlay */}
      <div className="bg-grid" aria-hidden="true" />
      <img className="vector-bg" alt="" src="/Vector.svg" />

      {/* Title */}
      <h1 className="contact-title">
        <span className="calls-to">Calls to</span>{' '}
        <span className="action-outline">ACTION</span>
      </h1>

      {/* CTA Card */}
      <section className="cta-card">
        <img src="/Vector.svg" alt="decorative curve" className="cta-curve" />
        <div className="cta-lines">
          <p className="cta-line">
            Email us @: <a href="mailto:jobhive@example.com">jobhive@example.com</a>
          </p>
          <p className="cta-line">Mobile: +234 800 123 4567</p>
          <p className="cta-line">1, Teslim Balogun Street, Alh. Masha Rd, Lagos</p>
        </div>
      </section>
    </div>
  )
}

export default Contact