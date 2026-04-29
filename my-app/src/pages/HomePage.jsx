import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import ElectricBorder from '../components/ElectricBorder/ElectricBorder';
import Navbar from '../components/Navbar/Navbar';
import Silk from '../components/Silk/Silk';

const isHoverCapable = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(hover: hover) and (pointer: fine)')?.matches === true;

const missionModals = {
  erp: {
    route: '/#en-cours/erp-ac-zamparo',
    title: 'Application SaaS ERP pour AC Zamparo',
    codeTitle: 'missions/aurenyx-erp.ts',
    intro:
      'Conception et développement d’une application web de type ERP en SaaS pour la société AC Zamparo.',
    detailsParagraphs: [
      'Un SaaS (Software as a Service) est une application accessible directement en ligne, sans installation, permettant aux utilisateurs de centraliser et gérer leurs données et processus métier depuis n’importe quel appareil, avec une infrastructure hébergée et maintenue à distance.',
      'Dans ce projet, l’objectif était de créer une solution ERP responsive et centralisée, afin d’optimiser la gestion interne et fluidifier les opérations de l’entreprise.',
      'Automatisation de tâches via cron job (exécution planifiée de processus backend).',
      'Mission réalisée dans le cadre d’une prestation pour Aurenyx Studio.',
      'Résultat : une application SaaS structurée, accessible et évolutive, améliorant l’efficacité opérationnelle et la gestion quotidienne d’AC Zamparo.',
    ],
    stack: ['Next.js', 'JavaScript', 'Supabase', 'Vercel', 'Dropbox'],
  },
  numerologue: {
    route: '/#en-cours/site-interne-numerologue',
    title: 'Outil de génération de contenus en numérologie',
    codeTitle: 'missions/numerologue-internal-app.ts',
    intro:
      "Conception et développement d’un outil sur mesure pour une numérologue permettant de générer, modifier et personnaliser rapidement ses textes d’analyse client.",
    detailsParagraphs: [
      'L’objectif était de transformer un processus de rédaction long et répétitif en un système fluide basé sur des modèles réutilisables, afin d’optimiser la préparation des consultations et d’améliorer l’efficacité au quotidien.',
      'Le projet a été développé avec Supabase pour la gestion des données et déployé via Vercel, garantissant une solution rapide, scalable et accessible en ligne.',
      'Résultat : un gain de temps important, une cohérence renforcée des contenus, et une expérience de travail simplifiée permettant de se concentrer davantage sur l’accompagnement client.',
    ],
    stack: ['Next.js', 'JavaScript', 'Supabase', 'Vercel'],
    images: [
      `${process.env.PUBLIC_URL}/images/num1.png`,
      `${process.env.PUBLIC_URL}/images/num2.png`,
      `${process.env.PUBLIC_URL}/images/num3.png`,
    ],
  },
};

const projectStacks = [
  'Next.js',
  'React',
  'JavaScript',
  'Node.js',
  'Ruby on Rails',
  'Supabase',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'NextAuth',
  'Cypress',
  'Vercel',
  'GitLab',
  'Git/GitHub',
];

const CONTACT_COOLDOWN_MS = 10 * 60 * 1000;
const CONTACT_LAST_SENT_KEY = 'portfolio_contact_last_sent_at';

export default function HomePage() {
  const { hash } = useLocation();
  const [activeMissionModal, setActiveMissionModal] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [contactStatus, setContactStatus] = useState('idle');
  const [contactCooldownLeft, setContactCooldownLeft] = useState(0);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const freelanceModalId = useId();
  const cvModalId = useId();
  const accordionTimersRef = useRef(new WeakMap());
  const contactFrontRef = useRef(null);
  const [contactFlipHeight, setContactFlipHeight] = useState(0);
  const closeFreelanceModal = useCallback(() => setActiveMissionModal(null), []);
  const closeCvModal = useCallback(() => setCvModalOpen(false), []);
  const reloadPage = useCallback(() => {
    window.location.reload();
  }, []);
  const clearAccordionTimer = useCallback((detailsEl) => {
    if (!detailsEl) return;
    const timers = accordionTimersRef.current;
    const timerId = timers.get(detailsEl);
    if (timerId) {
      window.clearTimeout(timerId);
      timers.delete(detailsEl);
    }
  }, []);

  const handleAccordionMouseEnter = useCallback(
    (e) => {
      if (!isHoverCapable()) return;
      const detailsEl = e.currentTarget;
      clearAccordionTimer(detailsEl);
      const timerId = window.setTimeout(() => {
        detailsEl.open = true;
        accordionTimersRef.current.delete(detailsEl);
      }, 650);
      accordionTimersRef.current.set(detailsEl, timerId);
    },
    [clearAccordionTimer]
  );

  const handleAccordionMouseLeave = useCallback(
    (e) => {
      if (!isHoverCapable()) return;
      const detailsEl = e.currentTarget;
      clearAccordionTimer(detailsEl);
      const timerId = window.setTimeout(() => {
        detailsEl.open = false;
        accordionTimersRef.current.delete(detailsEl);
      }, 180);
      accordionTimersRef.current.set(detailsEl, timerId);
    },
    [clearAccordionTimer]
  );

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, [hash]);

  useEffect(() => {
    if (!activeMissionModal) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeFreelanceModal();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeMissionModal, closeFreelanceModal]);

  useEffect(() => {
    if (!cvModalOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeCvModal();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [cvModalOpen, closeCvModal]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const getRemainingCooldown = () => {
      const rawLastSentAt = window.localStorage.getItem(CONTACT_LAST_SENT_KEY);
      const lastSentAt = rawLastSentAt ? Number(rawLastSentAt) : 0;
      if (!lastSentAt) return 0;
      const remaining = CONTACT_COOLDOWN_MS - (Date.now() - lastSentAt);
      return remaining > 0 ? remaining : 0;
    };

    const updateCooldown = () => {
      const remaining = getRemainingCooldown();
      setContactCooldownLeft(remaining);
      if (remaining === 0) {
        setContactStatus((prev) => (prev === 'cooldown' ? 'idle' : prev));
        return;
      }

      setContactStatus((prev) => {
        if (prev === 'idle' || prev === 'cooldown') return 'cooldown';
        return prev;
      });
    };

    updateCooldown();
    const intervalId = window.setInterval(updateCooldown, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const handleContactSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (contactCooldownLeft > 0) {
      setContactStatus('cooldown');
      return;
    }

    setContactStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xjgjnzry', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        setContactStatus('error');
        return;
      }

      form.reset();
      window.localStorage.setItem(CONTACT_LAST_SENT_KEY, String(Date.now()));
      setContactCooldownLeft(CONTACT_COOLDOWN_MS);
      setContactStatus('success');
    } catch {
      setContactStatus('error');
    }
  }, [contactCooldownLeft]);

  const modalContent = activeMissionModal ? missionModals[activeMissionModal] : null;

  useEffect(() => {
    const el = contactFrontRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;

    const update = () => {
      const next = Math.ceil(el.getBoundingClientRect().height);
      setContactFlipHeight((prev) => (prev !== next ? next : prev));
    };

    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="app-silk" aria-hidden="true">
        <Silk speed={5} scale={1} color="#d6667c" noiseIntensity={0.6} rotation={0} />
      </div>
      <div className="app-stage">
        <main className="app-main" id="accueil">
          <section className="home-hero" aria-label="Présentation">
            <div className="home-hero-card">
              <div className="home-hero-photoWrap">
                <img
                  className="home-hero-photo"
                  src={`${process.env.PUBLIC_URL}/images/ja.png`}
                  alt="Jennifer Aubin"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="home-hero-text">
                <h1 className="home-hero-name">Aubin Jennifer</h1>
                <p className="home-hero-role">Développeuse web full-stack</p>
                <p className="home-hero-tagline">
                  À la recherche d’une alternance en développement web
                </p>
                <button
                  type="button"
                  className="cv-icon-btn"
                  onClick={() => setCvModalOpen(true)}
                  aria-label="Voir mon CV"
                  aria-haspopup="dialog"
                  aria-controls={cvModalId}
                >
                  <svg
                    className="cv-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7Zm0 11.5A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 0 1 0 9Zm0-2.5a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <section className="app-section app-section--glass" aria-label="À propos">
        <div className="glass-grid">
          <ElectricBorder
            color="#d6667c"
            speed={0.5}
            chaos={0.12}
            thickness={2}
            style={{ borderRadius: 22 }}
          >
            <div id="presentation" className="glass-card" aria-labelledby="presentation-title">
              <h2 id="presentation-title" className="app-section-title app-section-title--onGlass">
                Qui suis-je ?
              </h2>
              <p className="app-section-text app-section-text--onGlass">
                Je m’appelle Jennifer, <span className="text-emph">développeuse web</span> en
                reconversion depuis <span className="text-emph">2024</span>.
              </p>
              <p className="app-section-text app-section-text--onGlass">
                Après un changement de parcours, je me suis tournée vers le développement web, un domaine
                qui me <span className="text-emph">passionne</span> aujourd’hui.
              </p>
              <p className="app-section-text app-section-text--onGlass">
                <span className="text-emph">Curieuse</span> et <span className="text-emph">motivée</span>,
                j’apprécie développer mes compétences à travers différents projets et{' '}
                <span className="text-emph">évoluer</span> dans un environnement où je peux continuer
                à <span className="text-emph">progresser</span>.
              </p>
            </div>
          </ElectricBorder>

          <ElectricBorder
            color="#d6667c"
            speed={0.5}
            chaos={0.12}
            thickness={2}
            style={{ borderRadius: 22 }}
          >
            <div id="parcours" className="glass-card" aria-labelledby="parcours-title">
              <h2 id="parcours-title" className="app-section-title app-section-title--onGlass">
                Mon parcours
              </h2>
              <details
                className="glass-accordion"
                onMouseEnter={handleAccordionMouseEnter}
                onMouseLeave={handleAccordionMouseLeave}
              >
                <summary className="glass-accordion-summary">
                  <span className="glass-accordion-year">2024</span>
                  <span className="glass-accordion-label">
                    Stage auprès d’un développeur senior - Matthieu Laize
                  </span>
                </summary>
                <div className="glass-accordion-content">
                  <div className="glass-accordion-body">
                    <p className="app-section-text app-section-text--onGlass">
                      Apprentissage des bases du HTML et du CSS, premières bonnes pratiques de
                      développement.
                    </p>
                  </div>
                </div>
              </details>
              <details
                className="glass-accordion"
                onMouseEnter={handleAccordionMouseEnter}
                onMouseLeave={handleAccordionMouseLeave}
              >
                <summary className="glass-accordion-summary">
                  <span className="glass-accordion-year">2024</span>
                  <span className="glass-accordion-label">Formation en Ruby on Rails - Ecole du wagon</span>
                </summary>
                <div className="glass-accordion-content">
                  <div className="glass-accordion-body">
                    <p className="app-section-text app-section-text--onGlass">
                      Apprentissage du développement web avec Ruby on Rails, renforcement des bases
                      en backend et logique de projet.
                    </p>
                    <p className="app-section-text app-section-text--onGlass">
                      Certification – Conceptrice Développeuse d’Applications Web
                      <br />
                      📍 Le Wagon Bordeaux – 2024
                    </p>
                  </div>
                </div>
              </details>
              <details
                className="glass-accordion"
                onMouseEnter={handleAccordionMouseEnter}
                onMouseLeave={handleAccordionMouseLeave}
              >
                <summary className="glass-accordion-summary">
                  <span className="glass-accordion-year">2024</span>
                  <span className="glass-accordion-label">
                    Stage chez Kapsloc - Bureau d'étude et de conception numérique
                  </span>
                </summary>
                <div className="glass-accordion-content">
                  <div className="glass-accordion-body">
                    <p className="app-section-text app-section-text--onGlass">
                      Développement d’applications web avec des technologies modernes (Next.js,
                      NextAuth, Prisma, MongoDB).
                    </p>
                    <p className="app-section-text app-section-text--onGlass">
                      Mise en place de l’authentification et de la gestion de base de données, ainsi
                      que des tests E2E avec Cypress pour assurer la fiabilité du code.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </ElectricBorder>
        </div>

        <div className="glass-grid-below">
          <ElectricBorder
            color="#d6667c"
            speed={0.5}
            chaos={0.12}
            thickness={2}
            style={{ borderRadius: 22 }}
          >
            <div className="glass-card" aria-labelledby="suite-title">
              <h2 id="suite-title" className="app-section-title app-section-title--onGlass">
                En cours
              </h2>
              <div className="en-cours-split" role="group" aria-label="Activités en cours">
                <div className="en-cours-col">
                  <h3 className="app-section-subheading app-section-subheading--onGlass">
                    ✦ Développeuse web freelance - 2025 → 2026
                  </h3>
                  <p className="app-section-text app-section-text--onGlass">
                    Création de solutions web sur mesure pour différents clients dans le cadre de
                    missions freelance. Développement de sites web et d’applications web responsives.
                  </p>
                  <ul className="app-section-list app-section-list--onGlass">
                    <li>
                      Application web type ERP pour la société AC Zamparo (mission réalisée pour Aurenyx
                      Studio)
                      <button
                        type="button"
                        className="en-cours-inlineInfoBtn"
                        aria-label="Voir le detail de la mission ERP AC Zamparo"
                        aria-haspopup="dialog"
                        aria-controls={freelanceModalId}
                        onClick={() => setActiveMissionModal('erp')}
                      >
                        ⓘ
                      </button>
                    </li>
                    <li>
                      Site web interne pour une numérologue : outil de gestion incluant une bibliothèque
                      de contenus et un suivi des séances clients
                      <button
                        type="button"
                        className="en-cours-inlineInfoBtn"
                        aria-label="Voir le detail de la mission site interne numerologue"
                        aria-haspopup="dialog"
                        aria-controls={freelanceModalId}
                        onClick={() => setActiveMissionModal('numerologue')}
                      >
                        ⓘ
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="en-cours-divider" aria-hidden="true" />

                <div className="en-cours-col en-cours-col--formation">
                  <h3 className="app-section-subheading app-section-subheading--onGlass">
                    ✦ Formation développement 3D web – 2026
                  </h3>
                  <p className="app-section-text app-section-text--onGlass">Formation avec Bruno Simon.</p>
                  <ul className="en-cours-points">
                    <li>Apprentissage de Three.js et initiation à Blender.</li>
                    <li>Création de scènes 3D interactives et intégration dans des sites web.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ElectricBorder>
        </div>
      </section>

      {modalContent ? (
        <div
          className="app-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${freelanceModalId}-title`}
          id={freelanceModalId}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeFreelanceModal();
          }}
        >
          <div className="app-modal-card" role="document">
            <div className="app-modal-header">
              <div className="app-modal-titleWrap">
                <span className="app-modal-badge" aria-hidden="true">
                  Unhandled Runtime Error
                </span>
                <h3 className="app-modal-title" id={`${freelanceModalId}-title`}>
                  {modalContent.title}
                </h3>
              </div>
              <button
                type="button"
                className="app-modal-close"
                onClick={closeFreelanceModal}
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className="app-modal-body">
              <dl className="app-modal-meta" aria-label="Informations d'exécution">
                <div>
                  <dt>Environment</dt>
                  <dd>Client</dd>
                </div>
                <div>
                  <dt>Route</dt>
                  <dd>{modalContent.route}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>Unhandled Runtime Info</dd>
                </div>
              </dl>

              <div className="app-modal-codeframe" aria-label="Code frame simulée">
                <p className="app-modal-codeTitle">{modalContent.codeTitle}</p>
                <pre className="app-modal-codeBlock">
                  <span className="app-modal-codeLine">11 | const mission = openFreelanceMission();</span>
                  <span className="app-modal-codeLine app-modal-codeLine--highlight">
                    {'>'} 12 | mission.stack.push('Next.js, Supabase, Vercel');
                  </span>
                  <span className="app-modal-codeLine">13 | return mission;</span>
                </pre>
              </div>

              <p className="app-section-text app-section-text--onGlass">
                {modalContent.intro}
              </p>

              {modalContent.detailsParagraphs?.length
                ? modalContent.detailsParagraphs.map((paragraph) => (
                    <p key={paragraph} className="app-section-text app-section-text--onGlass">
                      {paragraph}
                    </p>
                  ))
                : null}

              {modalContent.highlights?.length ? (
                <ul className="en-cours-points">
                  {modalContent.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              <h4 className="app-section-subheading app-section-subheading--onGlass">🛠️ Stack technique</h4>
              <ul className="en-cours-points">
                {modalContent.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              {modalContent.images?.length ? (
                <div className="app-modal-gallery" aria-label="Captures de la mission">
                  {modalContent.images.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Capture ${index + 1} de la mission`}
                      className="app-modal-galleryImage"
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              ) : null}

              <div className="app-modal-actions">
                <button type="button" className="app-modal-action app-modal-action--ghost" onClick={closeFreelanceModal}>
                  Dismiss
                </button>
                <button type="button" className="app-modal-action app-modal-action--primary" onClick={reloadPage}>
                  Reload
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {cvModalOpen ? (
        <div
          className="app-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${cvModalId}-title`}
          id={cvModalId}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeCvModal();
          }}
        >
          <div className="app-modal-card" role="document">
            <div className="app-modal-header">
              <div className="app-modal-titleWrap">
                <span className="app-modal-badge" aria-hidden="true">
                  Unhandled Runtime Error
                </span>
                <h3 className="app-modal-title" id={`${cvModalId}-title`}>
                  &nbsp;
                </h3>
              </div>
              <div className="app-modal-headerActions">
                <a
                  className="app-modal-action app-modal-action--ghost"
                  href={`${process.env.PUBLIC_URL}/CV-AUBIN-JENNIFER.pdf`}
                  download
                >
                  Télécharger
                </a>
                <button type="button" className="app-modal-close" onClick={closeCvModal} aria-label="Fermer">
                  ✕
                </button>
              </div>
            </div>

            <div className="app-modal-body">
              <dl className="app-modal-meta" aria-label="Informations d'exécution">
                <div>
                  <dt>Environment</dt>
                  <dd>Client</dd>
                </div>
                <div>
                  <dt>Route</dt>
                  <dd>/#mon-cv</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>Unhandled Runtime Info</dd>
                </div>
              </dl>
              <img
                className="cv-modal-image"
                src={`${process.env.PUBLIC_URL}/images/portfoliocv.png`}
                alt="CV - Aubin Jennifer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      ) : null}

      <section id="projets" className="app-section app-section--clear app-section--projects" aria-label="Stacks techniques">
        <div className="stacks-marquee" aria-label="Stacks techniques qui défilent">
          <div className="stacks-marquee-track">
            {[...projectStacks, ...projectStacks, ...projectStacks, ...projectStacks].map((stack, index) => (
              <span className="stacks-chip" key={`${stack}-${index}`}>
                {stack}
              </span>
            ))}
          </div>
          <div className="stacks-marquee-track stacks-marquee-track--reverse">
            {[...projectStacks, ...projectStacks, ...projectStacks, ...projectStacks].map((stack, index) => (
              <span className="stacks-chip" key={`${stack}-reverse-${index}`}>
                {stack}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="app-section app-section--glass app-section--last" aria-labelledby="contact-title">
        <div className="contact-container">
          <h2 id="contact-title" className="app-section-title">
            Contactez-moi !
          </h2>
          <div className={`contact-flip ${contactStatus === 'success' ? 'is-flipped' : ''}`}>
            <div className="contact-flip-inner" style={contactFlipHeight ? { height: `${contactFlipHeight}px` } : undefined}>
              <div className="contact-flip-front" ref={contactFrontRef}>
                <form className="contact-form" aria-label="Formulaire de contact" onSubmit={handleContactSubmit}>
                <input type="hidden" name="_subject" value="Nouveau message portfolio" />
                <input
                  type="text"
                  name="_gotcha"
                  className="contact-form-honeypot"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="contact-form-row">
                  <label className="contact-form-field">
                    <span className="contact-form-label">Nom</span>
                    <input className="contact-form-input" type="text" name="name" placeholder="Votre nom" required />
                  </label>
                  <label className="contact-form-field">
                    <span className="contact-form-label">Email</span>
                    <input
                      className="contact-form-input"
                      type="email"
                      name="email"
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </label>
                </div>

                <label className="contact-form-field">
                  <span className="contact-form-label">Objet</span>
                  <input
                    className="contact-form-input"
                    type="text"
                    name="subject"
                    placeholder="Objet du message"
                    required
                  />
                </label>

                <label className="contact-form-field">
                  <span className="contact-form-label">Message</span>
                  <textarea
                    className="contact-form-textarea"
                    name="message"
                    placeholder="Votre message..."
                    rows={6}
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="contact-form-submit"
                  disabled={contactStatus === 'sending' || contactCooldownLeft > 0}
                >
                  {contactStatus === 'sending' ? 'Envoi...' : 'Envoyer'}
                </button>

                {contactStatus === 'error' ? (
                  <p className="contact-form-feedback contact-form-feedback--error">
                    Une erreur est survenue pendant l envoi. Merci de réessayer.
                  </p>
                ) : null}

                {contactStatus === 'cooldown' ? (
                  <p className="contact-form-feedback contact-form-feedback--warning">
                    Merci d attendre {Math.ceil(contactCooldownLeft / 1000)}s avant un nouvel envoi.
                  </p>
                ) : null}
                </form>
              </div>

              <div className="contact-flip-back" aria-live="polite">
                <div className="contact-thanks">
                  <h3 className="contact-thanks-title">Merci !</h3>
                  <p className="contact-thanks-text">Votre message a bien été envoyé.</p>
                  <button
                    type="button"
                    className="contact-form-submit"
                    onClick={() => setContactStatus('idle')}
                  >
                    Renvoyer un message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="app-footer" role="contentinfo">
        © 2026 Aubin Jennifer – Tous droits réservés
      </footer>

      {showBackToTop ? (
        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Remonter en haut de page"
          title="Remonter en haut"
        >
          ↑
        </button>
      ) : null}
    </div>
  );
}
