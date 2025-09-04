import React, { useState } from 'react';
import { StarRating } from '../components/ui';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  return (
    <div className="about-page" style={{ position: 'relative' }}>
      <div className="bg-grid" aria-hidden="true" />
      <img className="vector-bg" alt="" src="/Vector.svg" />
      <header className="about-header">
        <h1 className="about-title">
          We value your <span className="hanalei">Feedback</span>
        </h1>
      </header>

      <div className="about-card" style={{ maxWidth: 900 }}>
        {!done ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <div className="section-heading">Rate the site</div>
            <StarRating value={rating} onChange={setRating} />
            <div className="section-heading">Feedback</div>
            <textarea className="apply-textarea" placeholder="Tell us what you think..." value={text} onChange={(e) => setText(e.target.value)} />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 12 }}>
              <button
                className="modal-close"
                type="reset"
                onClick={() => {
                  setRating(0);
                  setText('');
                }}
              >
                Clear
              </button>
              <button
                className="modal-close"
                type="submit"
                onClick={() => {
                  try {
                    window.alert('Thanks for the feedback.');
                  } catch {}
                }}
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="confirm-box">Thanks for your feedback! (demo)</div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
