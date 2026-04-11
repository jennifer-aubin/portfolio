import { useCallback, useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/#projets', label: 'Projets' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);

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
          Portfolio
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
                  <Link className="navbar-link" to={to} onClick={close}>
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
