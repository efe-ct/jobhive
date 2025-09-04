import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Button, useToast } from './ui';
import { jobCatalog } from '../datastore';

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11Z" stroke="#fff" strokeWidth="1.5" />
    <circle cx="12" cy="11" r="3" stroke="#fff" strokeWidth="1.5" />
  </svg>
);

const SalaryIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="#fff" strokeWidth="1.5" />
    <path d="M7 12h10M8.5 10.5v3M15.5 10.5v3" stroke="#fff" strokeWidth="1.5" />
  </svg>
);

const LevelIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="4" height="6" rx="1" stroke="#fff" strokeWidth="1.5" />
    <rect x="10" y="10" width="4" height="10" rx="1" stroke="#fff" strokeWidth="1.5" />
    <rect x="16" y="6" width="4" height="14" rx="1" stroke="#fff" strokeWidth="1.5" />
  </svg>
);

const Chip = ({ children }) => <div className="job-chip">{children}</div>;

const JobCard = ({ company, title, category, location, salary, level, tags = [], perks, qualifications, description, id }) => {
  const safePerks = perks || 'Health insurance, paid leave, and performance bonuses.';
  const safeQualifications = qualifications || 'Bachelor’s degree in a relevant field…';
  const chipTags = tags && tags.length ? tags : [];
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [animateOpen, setAnimateOpen] = useState(false);
  const cardRef = useRef(null);
  const { showToast } = useToast?.() || { showToast: () => {} };
  const [saved, setSaved] = useState(() => {
    const raw = localStorage.getItem('savedJobs');
    if (!raw) return false;
    try {
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr.includes(id) : false;
    } catch {
      return false;
    }
  });

  const full = useMemo(() => jobCatalog.find((j) => j.id === id) || {}, [id]);
  const toggleSave = () => {
    const raw = localStorage.getItem('savedJobs');
    let arr = [];
    try {
      arr = raw ? JSON.parse(raw) : [];
    } catch {
      arr = [];
    }
    if (!Array.isArray(arr)) arr = [];
    if (arr.includes(id)) arr = arr.filter((x) => x !== id);
    else arr.push(id);
    localStorage.setItem('savedJobs', JSON.stringify(arr));
    setSaved(arr.includes(id));
  };
  useEffect(() => {
    if (open) {
      // allow next tick for CSS transition
      const t = setTimeout(() => setAnimateOpen(true), 0);
      // lock body scroll
      try {
        document.body.classList.add('no-scroll');
      } catch {}
      return () => {
        clearTimeout(t);
        setAnimateOpen(false);
        try {
          document.body.classList.remove('no-scroll');
        } catch {}
      };
    } else {
      setAnimateOpen(false);
      try {
        document.body.classList.remove('no-scroll');
      } catch {}
    }
  }, [open]);
  return (
    <article className="job-card">
      <img className="job-card__curve" src="/Vector.svg" alt="" aria-hidden="true" />

      <div className="job-card__header">
        <div className="job-card__company">
          <a className="job-card__company-link" href="#">
            {company}
          </a>
        </div>
        <div className="job-pill">{category}</div>
      </div>

      <h3 className="job-card__title">{title}</h3>
      {chipTags.length > 0 && (
        <div className="job-chip-row">
          {chipTags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      )}

      <div className="job-card__meta">
        <div className="job-meta-item">
          <LocationIcon /> <span>{location}</span>
        </div>
        <div className="job-meta-item">
          <SalaryIcon /> <span>₦{salary}</span>
        </div>
        <div className="job-meta-item">
          <LevelIcon /> <span>{level}</span>
        </div>
      </div>

      <div className="job-card__body">
        <div className="job-card__section">
          <div className="job-card__label">Perks:</div>
          <p className="job-card__text">{safePerks}</p>
        </div>
        <div className="job-card__section">
          <div className="job-card__label">Qualifications:</div>
          <p className="job-card__text">{safeQualifications}</p>
        </div>
      </div>

      <div className="job-card__footer">
        <span className="job-card__hint">Click card for more info</span>
        <div className={`save-btn ${saved ? 'active' : ''}`} onClick={toggleSave} title={saved ? 'Saved' : 'Save job'}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3h12a1 1 0 0 1 1 1v16l-7-4-7 4V4a1 1 0 0 1 1-1Z" stroke="#fff" strokeWidth="1.5" />
          </svg>
          <span>{saved ? 'Saved' : 'Save'}</span>
        </div>
      </div>

      <div className="job-card__apply">
        <Button
          type="default"
          state="selected"
          onClick={() => {
            setOpen(true);
            setConfirm(false);
          }}
        >
          APPLY NOW
        </Button>
      </div>

      {open && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div ref={cardRef} className={`modal-card${animateOpen ? ' is-open' : ''}`} role="dialog" aria-modal="true">
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              <button className="modal-close" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div className="modal-body">
              <div className="job-detail">
                <div className="job-detail-row">
                  <div>Company</div>
                  <div>{company || full.company}</div>
                </div>
                <div className="job-detail-row">
                  <div>Category</div>
                  <div>{category || full.category}</div>
                </div>
                <div className="job-detail-row">
                  <div>Location</div>
                  <div>{location || full.location}</div>
                </div>
                <div className="job-detail-row">
                  <div>Salary</div>
                  <div>₦{salary || full.salary}</div>
                </div>
                <div className="job-detail-row">
                  <div>Level</div>
                  <div>{level || full.level || full.experience}</div>
                </div>
                <div className="job-detail-row">
                  <div>Perks</div>
                  <div>{perks || full.perks || safePerks}</div>
                </div>
                <div className="job-detail-row">
                  <div>Qualifications</div>
                  <div>{qualifications || full.qualifications || safeQualifications}</div>
                </div>
                <div className="job-detail-row">
                  <div>Description</div>
                  <div>{description || full.description}</div>
                </div>
              </div>

              {!confirm ? (
                <div className="apply">
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '22px' }}>Apply Now</div>
                  <form
                    className="apply-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setConfirm(true);
                      try {
                        showToast('Application has been submitted, good luck.', 2600);
                      } catch {}
                      try {
                        window.alert('Job application has been submitted.');
                      } catch {}
                    }}
                  >
                    <input className="apply-input" type="text" name="name" placeholder="Full Name" required />
                    <input className="apply-input" type="email" name="email" placeholder="Email" required />
                    <input className="apply-file" type="file" name="resume" accept=".pdf,.doc,.docx" />
                    <textarea className="apply-textarea" name="cover" placeholder="Cover Letter (optional)"></textarea>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <Button type="default" state="grey" onClick={() => setOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="default" state="selected">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="confirm-box">Thank you! Your application was submitted (demo). We’ll be in touch.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default JobCard;
