import React, { useMemo, useState } from 'react';
import { SearchBar } from '../components/ui';
import { useLocation, useNavigate } from 'react-router-dom';
import JobCard from '../components/JobCard';
import { jobCatalog } from '../datastore';

const Jobs = () => {
  // naive skill extraction from description
  const deriveTags = (desc) => {
    if (!desc) return [];
    const keywords = [
      'Marketing',
      'Finance',
      'Design',
      'Technology',
      'Public',
      'Government',
      'Operations',
      'Sales',
      'Leadership',
      'Teamwork',
      'Collaboration',
      'Communication',
      'Problem-solving',
      'Analytical',
      'Adaptability',
      'Time management',
      'Technical expertise',
      'Excel',
      'SQL',
      'React',
      'JavaScript',
    ];
    const lower = desc.toLowerCase();
    const tags = [];
    for (const k of keywords) {
      const token = k.toLowerCase();
      if (lower.includes(token)) tags.push(k);
    }
    // de-duplicate and cap to 3 chips
    return Array.from(new Set(tags)).slice(0, 3);
  };

  const locationHook = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(locationHook.search);
  const q = params.get('q') || '';
  const cat = params.get('cat') || '';
  const lvl = params.get('lvl') || '';
  const loc = params.get('loc') || '';
  const sort = params.get('sort') || 'az';

  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    let rows = jobCatalog.filter((j) => {
      const hay = `${j.company} ${j.title} ${j.category || ''} ${j.location || ''} ${j.description || ''}`.toLowerCase();
      const termOk = term ? hay.includes(term) : true;
      const catOk = cat ? (j.category || '').toLowerCase().includes(cat.toLowerCase()) : true;
      const lvlOk = lvl ? (j.level || j.experience || '').toLowerCase().includes(lvl.toLowerCase()) : true;
      const locOk = loc ? (j.location || '').toLowerCase().includes(loc.toLowerCase()) : true;
      return termOk && catOk && lvlOk && locOk;
    });
    // Sorting logic
    if (sort === 'salary-desc' || sort === 'salary-asc') {
      const num = (s) => {
        if (!s) return 0;
        // try to extract a number from salary text like "$120,000" or "NGN 1,200,000"
        const m = String(s).replace(/[^0-9.]/g, '');
        return parseFloat(m || '0');
      };
      rows.sort((a, b) => (sort === 'salary-desc' ? num(b.salary) - num(a.salary) : num(a.salary) - num(b.salary)));
    } else if (sort === 'recent') {
      // If data has a date field use it; otherwise fall back to id desc as pseudo-recent
      rows.sort((a, b) => {
        const ad = a.date ? new Date(a.date).getTime() : a.id || 0;
        const bd = b.date ? new Date(b.date).getTime() : b.id || 0;
        return bd - ad;
      });
    } else {
      rows.sort((a, b) => {
        const at = `${a.title}`.toLowerCase();
        const bt = `${b.title}`.toLowerCase();
        return sort === 'za' ? bt.localeCompare(at) : at.localeCompare(bt);
      });
    }
    return rows;
  }, [q, cat, lvl, loc, sort]);

  const visibleJobs = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  const onShowMore = () => {
    setVisibleCount((c) => Math.min(c + 9, jobCatalog.length));
  };

  return (
    <div className="jobs-page" style={{ position: 'relative' }}>
      <div className="bg-grid" aria-hidden="true" />
      <img className="vector-bg" alt="" src="/Vector.svg" />

      <header className="jobs-header">
        <h1 className="jobs-title">
          <span>Find your <span className="hanalei">PATH</span> HERE</span>
        </h1>
      </header>

      <div className="jobs-search">
        <SearchBar
          defaultQuery={q}
          defaultCategory={cat || 'All Categories'}
          defaultLevel={lvl || 'All Experience Levels'}
          defaultLocation={loc || 'All Locations'}
          defaultSort={sort === 'za' ? 'Z - A' : sort === 'salary-desc' ? 'Salary (high → low)' : sort === 'salary-asc' ? 'Salary (low → high)' : sort === 'recent' ? 'Most recent' : 'A - Z'}
          onSearch={({ q: nq, cat: ncat, lvl: nlvl, loc: nloc, sort: nsort }) => {
            const p = new URLSearchParams();
            if (nq) p.set('q', nq);
            if (ncat) p.set('cat', ncat);
            if (nlvl) p.set('lvl', nlvl);
            if (nloc) p.set('loc', nloc);
            if (nsort) p.set('sort', nsort);
            navigate(`/jobs?${p.toString()}`);
          }}
        />
      </div>

      <section className="jobs-grid">
        {visibleJobs.map((j) => (
          <JobCard
            key={j.id}
            id={j.id}
            company={j.company}
            title={j.title}
            category={j.category || j.experience}
            location={j.location}
            salary={j.salary}
            level={j.level || j.experience}
            tags={deriveTags(j.description)}
            perks={j.perks}
            qualifications={j.qualifications}
            description={j.description}
          />
        ))}
      </section>

      <div className="jobs-more">
        {visibleCount < filtered.length && (
          <div className="variant-component grey-default" onClick={onShowMore}>
            Show More
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
