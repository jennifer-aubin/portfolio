import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

export default function ContactPage() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div className="contact-page">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="contact-name">
            Nom
          </label>
          <input
            id="contact-name"
            className="contact-form-input"
            type="text"
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="contact-email">
            E-mail
          </label>
          <input
            id="contact-email"
            className="contact-form-input"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            className="contact-form-textarea"
            name="message"
            rows={6}
            required
          />
        </div>
        <button type="submit" className="contact-form-submit">
          Envoyer
        </button>
      </form>

      <p className="contact-page-footer">
        <Link to="/" className="contact-page-back">
          Retour au portfolio
        </Link>
      </p>
    </div>
  );
}
