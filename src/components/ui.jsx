// styles consolidated in index.css
import logo from '/logo.png';
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { jobCatalog } from '../datastore';
import { NavLink, Link } from 'react-router-dom';

// Button with variant/state handling
export const Button = ({ state, type, children, fontSize, isLink = false, to, onClick, onFooter = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const content = children || 'Button';
  let classes = 'variant-component';

  switch (type) {
    case 'default':
      if (state === 'selected') classes += ' selected-default';
      else if (state === 'grey-hover') classes += ' grey-hover-default';
      else if (state === 'grey') classes += ' grey-default';
      else if (isHovered) classes += ' hover-default';
      else classes += ' default-default';
      break;
    case 'link':
      classes += isHovered ? ' link-hover-link' : ' default-link';
      break;
    case 'label':
      classes += state === 'grey' ? ' grey-label' : ' default-label';
      break;
    case 'dialog':
      classes += isHovered ? ' hover-dialog' : ' default-dialog';
      break;
    default:
      classes += ' default-default';
  }

  const isDialog = type === 'dialog';
  const isLinkType = type === 'link';
  const body = (
    <div className={isLinkType ? 'link-text' : ''} style={fontSize ? { fontSize } : undefined}>
      {content}
    </div>
  );

  const common = {
    className: classes,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick,
  };

  // Footer links should not show active/selected styles.
  if (isLink && onFooter) {
    return (
      <Link
        to={to}
        {...common}
        onClick={(e) => {
          common.onClick?.(e);
          // ensure scroll to top
          try {
            window.scrollTo({ top: 0, behavior: 'auto' });
          } catch {}
        }}
      >
        {body}
        {isDialog && <img className="frame-icon" alt="" src="Frame.svg" />}
      </Link>
    );
  }

  return isLink ? (
    <NavLink
      to={to}
      {...common}
      onClick={(e) => {
        common.onClick?.(e);
        try {
          window.scrollTo({ top: 0, behavior: 'auto' });
        } catch {}
      }}
    >
      {body}
      {isDialog && <img className="frame-icon" alt="" src="Frame.svg" />}
    </NavLink>
  ) : (
    <div {...common}>
      {body}
      {isDialog && <img className="frame-icon" alt="" src="Frame.svg" />}
    </div>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const NavLinks = ({ onItemClick }) => (
    <>
      <Button isLink to="/" type="default" onClick={onItemClick}>
        Home
      </Button>
      <Button isLink to="/contact" type="default" onClick={onItemClick}>
        Contact Us
      </Button>
      <Button isLink to="/about" type="default" onClick={onItemClick}>
        About
      </Button>
      <Button isLink to="/jobs" type="default" onClick={onItemClick}>
        Jobs
      </Button>
      <Button isLink to="/feedback" type="default" onClick={onItemClick}>
        Feedback
      </Button>
      <Button isLink to="/saved" type="default" onClick={onItemClick}>
        Saved
      </Button>
    </>
  );

  return (
    <div className="navbar">
      <Logo />
      <div className="navbar-links">
        <NavLinks />
      </div>
      <div className="navbar-cta">
        <Button isLink to="/jobs" type="default" state="selected">
          Apply Now
        </Button>
        <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
            <path
              fillRule="evenodd"
              d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {open && <div className="sidebar-overlay" onClick={close} />}
      <aside className={`sidebar${open ? ' open' : ''}`} aria-hidden={!open}>
        <button className="sidebar-close" aria-label="Close menu" onClick={close}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="sidebar-links">
          <NavLinks onItemClick={close} />
        </div>
      </aside>
    </div>
  );
};

export const Logo = () => (
  <Link to="/" className="logo-text">
    <div className="logo">
      <img className="logo-icon" alt="" src={logo} />
    </div>
    <div>Jobhive</div>
  </Link>
);

// Redesigned SearchBar layout for Home/Jobs
// Simple dropdown used inside the SearchBar
const Dropdown = ({ value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <Button type="dialog" onClick={() => setOpen((o) => !o)}>
        {value}
      </Button>
      {open && (
        <div className="dropdown-menu">
          {options.map((opt) => (
            <div
              key={opt}
              className={`dropdown-item${opt === value ? ' active' : ''}`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const SearchBar = ({ defaultQuery = '', defaultCategory = 'All Categories', defaultLevel = 'All Experience Levels', defaultLocation = 'All Locations', defaultSort = 'A - Z', onSearch }) => {
  const [query, setQuery] = useState(defaultQuery);
  const [category, setCategory] = useState(defaultCategory);
  const [level, setLevel] = useState(defaultLevel);
  const [location, setLocation] = useState(defaultLocation);
  const [sort, setSort] = useState(defaultSort);

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);
  useEffect(() => setCategory(defaultCategory), [defaultCategory]);
  useEffect(() => setLevel(defaultLevel), [defaultLevel]);
  useEffect(() => setLocation(defaultLocation), [defaultLocation]);
  useEffect(() => setSort(defaultSort), [defaultSort]);

  // Build dynamic option lists from the dataset (deduped, sorted)
  const categoryOptions = useMemo(() => {
    const set = new Set();
    jobCatalog.forEach((j) => j.category && set.add(String(j.category)));
    return ['All Categories', ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);
  const levelOptions = useMemo(() => {
    const set = new Set();
    jobCatalog.forEach((j) => {
      const lvl = j.level || j.experience;
      if (lvl) set.add(String(lvl));
    });
    return ['All Experience Levels', ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);
  const locationOptions = useMemo(() => {
    const set = new Set();
    jobCatalog.forEach((j) => j.location && set.add(String(j.location)));
    return ['All Locations', ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);
  const sortOptions = useMemo(() => ['A - Z', 'Z - A', 'Salary (high → low)', 'Salary (low → high)', 'Most recent'], []);

  const clearAll = () => {
    setQuery('');
    setCategory('All Categories');
    setLevel('All Experience Levels');
    setLocation('All Locations');
    setSort('A - Z');
    if (onSearch) onSearch({ q: '', cat: '', lvl: '', loc: '', sort: 'az' });
  };

  const submit = () => {
    if (!onSearch) return;
    const sortKey = sort === 'Z - A' ? 'za' : sort === 'Salary (high → low)' ? 'salary-desc' : sort === 'Salary (low → high)' ? 'salary-asc' : sort === 'Most recent' ? 'recent' : 'az';
    onSearch({
      q: query.trim(),
      cat: category === 'All Categories' ? '' : category,
      lvl: level === 'All Experience Levels' ? '' : level,
      loc: location === 'All Locations' ? '' : location,
      sort: sortKey,
    });
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') submit();
  };

  return (
    <div className="searchbar">
      <div className="searchbar-row">
        <div className="searchbar-input">
          <input type="text" placeholder="Search for a job, location......" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={onKeyDown} />
        </div>
        <div className="searchbar-filters">
          <div className="filters-row">
            <Dropdown value={category} options={categoryOptions} onChange={setCategory} />
            <Dropdown value={sort} options={sortOptions} onChange={setSort} />
            <Button type="default" state="grey" onClick={clearAll}>
              Clear
            </Button>
            <Button type="default" state="grey-hover" onClick={submit}>
              Go
            </Button>
          </div>
          <div className="filters-row">
            <Dropdown value={level} options={levelOptions} onChange={setLevel} />
            <Dropdown value={location} options={locationOptions} onChange={setLocation} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile-first Search Box (column layout)
export const MobileSearchBox = ({ defaultQuery = '', defaultCategory = 'All Categories', defaultLevel = 'All Experience Levels', defaultLocation = 'All Locations', defaultSort = 'A - Z', onSearch }) => {
  const [query, setQuery] = useState(defaultQuery);
  const [category, setCategory] = useState(defaultCategory);
  const [level, setLevel] = useState(defaultLevel);
  const [location, setLocation] = useState(defaultLocation);
  const [sort, setSort] = useState(defaultSort);

  useEffect(() => setQuery(defaultQuery), [defaultQuery]);
  useEffect(() => setCategory(defaultCategory), [defaultCategory]);
  useEffect(() => setLevel(defaultLevel), [defaultLevel]);
  useEffect(() => setLocation(defaultLocation), [defaultLocation]);
  useEffect(() => setSort(defaultSort), [defaultSort]);

  const categoryOptions = useMemo(() => {
    const set = new Set();
    jobCatalog.forEach((j) => j.category && set.add(String(j.category)));
    return ['All Categories', ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);
  const levelOptions = useMemo(() => {
    const set = new Set();
    jobCatalog.forEach((j) => {
      const lvl = j.level || j.experience;
      if (lvl) set.add(String(lvl));
    });
    return ['All Experience Levels', ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);
  const locationOptions = useMemo(() => {
    const set = new Set();
    jobCatalog.forEach((j) => j.location && set.add(String(j.location)));
    return ['All Locations', ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);
  const sortOptions = useMemo(() => ['A - Z', 'Z - A', 'Salary (high → low)', 'Salary (low → high)', 'Most recent'], []);

  const submit = () => {
    if (!onSearch) return;
    const sortKey = sort === 'Z - A' ? 'za' : sort === 'Salary (high → low)' ? 'salary-desc' : sort === 'Salary (low → high)' ? 'salary-asc' : sort === 'Most recent' ? 'recent' : 'az';
    onSearch({
      q: query.trim(),
      cat: category === 'All Categories' ? '' : category,
      lvl: level === 'All Experience Levels' ? '' : level,
      loc: location === 'All Locations' ? '' : location,
      sort: sortKey,
    });
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') submit();
  };

  return (
    <div className="mobile-searchbox">
      <div>
        <input className="mobile-searchbox__input" type="text" placeholder="Search for a job, location......" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={onKeyDown} />
      </div>
      <div className="mobile-searchbox__filters">
        <div className="filters-row">
          <Dropdown value={category} options={categoryOptions} onChange={setCategory} />
          <Dropdown value={sort} options={sortOptions} onChange={setSort} />
        </div>
        <div className="filters-row">
          <Dropdown value={level} options={levelOptions} onChange={setLevel} />
          <Dropdown value={location} options={locationOptions} onChange={setLocation} />
        </div>
        <div className="filters-row" style={{ justifyContent: 'flex-end' }}>
          <Button type="default" state="grey-hover" onClick={submit}>
            Go
          </Button>
        </div>
      </div>
    </div>
  );
};

// Star icons and rating component (1–5)
const StarIcon = ({ filled = false, onClick }) => (
  <svg
    className="star-icon"
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    strokeWidth="1.5"
    stroke="currentColor"
    fill={filled ? 'white' : 'none'}
    role="img"
    aria-hidden="true"
    style={{ cursor: 'pointer', display: 'inline-block' }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

export const StarRating = ({ value = 0, onChange }) => {
  const set = (n) => onChange && onChange(n);
  return (
    <div className="star-rating" role="group" aria-label="Star rating" style={{ display: 'inline-flex', gap: 6 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon key={n} filled={n <= value} onClick={() => set(n)} />
      ))}
    </div>
  );
};

// Lightweight Toast context + host
const ToastContext = createContext({ showToast: (_msg, _ms) => {} });

export const useToast = () => useContext(ToastContext);

export const ToastHost = ({ children }) => {
  const [msg, setMsg] = useState('');
  const [show, setShow] = useState(false);
  const showToast = (text, ms = 2200) => {
    setMsg(String(text));
    setShow(true);
    window.clearTimeout(showToast._tid);
    showToast._tid = window.setTimeout(() => setShow(false), ms);
  };
  useEffect(() => () => window.clearTimeout(showToast._tid), []);
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={`toast${show ? ' show' : ''}`} role="status" aria-live="polite" aria-atomic="true">
        {msg}
      </div>
    </ToastContext.Provider>
  );
};
