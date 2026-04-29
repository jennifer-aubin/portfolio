import { useCallback, useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/#presentation', label: 'Qui suis-je ?' },
  { to: '/#projets', label: 'Stack' },
  { to: '/#contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);
  const handleNavClick = useCallback(
    (e, to) => {
      close();
      if (!to.startsWith('/#')) return;
      e.preventDefault();
      const hash = to.slice(2);
      const target = document.getElementById(hash);
      if (!target) {
        window.location.href = to;
        return;
      }
      const y = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.replaceState(null, '', to);
    },
    [close]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={close}>
          <span className="navbar-brandTop">Aubin</span>
          <span className="navbar-brandBottom">Jennifer</span>
        </Link>

        <button
          type="button"
          className="navbar-burger"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-burger-lines" aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>

        <div
          id={menuId}
          className={`navbar-panel ${open ? 'is-open' : ''}`}
          aria-hidden={!open}
        >
          <nav className="navbar-nav" aria-label="Navigation principale">
            <ul className="navbar-list">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link className="navbar-link" to={to} onClick={(e) => handleNavClick(e, to)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {open ? (
          <button
            type="button"
            className="navbar-backdrop"
            aria-label="Fermer le menu"
            onClick={close}
          />
        ) : null}
      </div>
    </header>
  );
}
