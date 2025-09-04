import React, { useEffect, useMemo, useState } from 'react';
import JobCard from '../components/JobCard';
import { jobCatalog } from '../datastore';

const Saved = () => {
  const [ids, setIds] = useState([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem('savedJobs');
      const arr = raw ? JSON.parse(raw) : [];
      setIds(Array.isArray(arr) ? arr : []);
    } catch {
      setIds([]);
    }
  }, []);

  const jobs = useMemo(() => jobCatalog.filter((j) => ids.includes(j.id)), [ids]);

  return (
    <div className="jobs-page" style={{ position: 'relative' }}>
      <div className="bg-grid" aria-hidden="true" />
      <img className="vector-bg" alt="" src="/Vector.svg" />
      <header className="jobs-header">
        <h1 className="jobs-title">
          Saved <span className="hanalei">Jobs</span>
        </h1>
      </header>
      <section className="jobs-grid">
        {jobs.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>No saved jobs yet.</div>
        ) : (
          jobs.map((j) => (
            <JobCard
              key={j.id}
              id={j.id}
              company={j.company}
              title={j.title}
              category={j.category || j.experience}
              location={j.location}
              salary={j.salary}
              level={j.level || j.experience}
              perks={j.perks}
              qualifications={j.qualifications}
              description={j.description}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default Saved;
