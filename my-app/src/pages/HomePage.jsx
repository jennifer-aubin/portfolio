import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import BlurText from '../components/BlurText/BlurText';
import Navbar from '../components/Navbar/Navbar';
import Silk from '../components/Silk/Silk';

/** Pause après la fin de la 1ʳᵉ phrase avant d’afficher la 2ᵉ (ms). */
const HERO_SECOND_LINE_DELAY_MS = 1600;

export default function HomePage() {
  const [heroLine, setHeroLine] = useState('primary');
  const secondLineTimeoutRef = useRef(null);

  useEffect(
    () => () => {
      if (secondLineTimeoutRef.current != null) {
        window.clearTimeout(secondLineTimeoutRef.current);
      }
    },
    []
  );

  const handlePrimaryLineComplete = useCallback(() => {
    secondLineTimeoutRef.current = window.setTimeout(() => {
      secondLineTimeoutRef.current = null;
      setHeroLine('secondary');
    }, HERO_SECOND_LINE_DELAY_MS);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="app-silk" aria-hidden="true">
        <Silk speed={5} scale={1} color="#d6667c" noiseIntensity={0.6} rotation={0} />
      </div>
      <div className="app-stage">
        <main className="app-main" id="accueil">
          <div className="app-hero-title app-hero-title--sequential">
            {heroLine === 'primary' && (
              <div role="heading" aria-level={1}>
                <BlurText
                  key="hero-primary"
                  as="div"
                  className="app-title"
                  text="Je crée des sites web rapides, modernes et interactifs"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handlePrimaryLineComplete}
                />
              </div>
            )}
            {heroLine === 'secondary' && (
              <div className="app-hero-secondary-row">
                <div className="app-hero-secondary-text" role="heading" aria-level={1}>
                  <BlurText
                    key="hero-secondary"
                    as="div"
                    className="app-title"
                    text="Des interfaces claires, accessibles et performantes."
                    delay={180}
                    animateBy="words"
                    direction="top"
                  />
                </div>
                <Link className="app-hero-contact-btn" to="/contact">
                  Contactez-moi
                </Link>
              </div>
            )}
          </div>
        </main>
      </div>

      <section id="projets" className="app-section" aria-labelledby="projets-title">
        <h2 id="projets-title" className="app-section-title">
          Projets
        </h2>
        <p className="app-section-text">Contenu à venir.</p>
      </section>
      <section id="contact" className="app-section app-section--last" aria-labelledby="contact-title">
        <h2 id="contact-title" className="app-section-title">
          Contact
        </h2>
        <p className="app-section-text">Contenu à venir.</p>
      </section>
    </div>
  );
}
