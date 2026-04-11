/* Page non exposée pour l’instant : la route /a-propos redirige vers / (voir App.js). */
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import '../App.css';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      <main className="about-page-main" id="a-propos">
        <h1 className="about-page-title">À propos</h1>
        <div className="app-section-about about-page-body">
          <p className="app-section-text">
            Je suis développeuse web freelance, spécialisée dans la création d’applications web sur mesure.
          </p>
          <p className="app-section-text">
            Après une reconversion dans le développement web, j’ai suivi une formation au sein d’une école
            spécialisée, où j’ai acquis les compétences nécessaires en front-end et back-end, ainsi que les bonnes
            pratiques de développement.
          </p>
          <p className="app-section-text">
            Aujourd’hui, j’accompagne des clients dans la réalisation de leurs projets digitaux, en concevant des
            solutions adaptées à leurs besoins.
          </p>
          <h2 className="app-section-subheading">Parmi mes réalisations :</h2>
          <ul className="app-section-list">
            <li>
              un SaaS pour le secteur du BTP, conçu pour répondre à des problématiques métiers concrètes
            </li>
            <li>
              une bibliothèque interactive pour une praticienne en numérologie, facilitant l’organisation et la
              consultation de ses contenus
            </li>
          </ul>
          <p className="app-section-text">
            Ces projets m’ont permis de travailler sur des cas réels, avec des besoins variés, en alliant technique,
            écoute client et expérience utilisateur.
          </p>
          <p className="app-section-text">
            Je continue à développer mes compétences à travers chaque nouveau projet, avec pour objectif de créer des
            applications performantes, modernes et utiles.
          </p>
        </div>
        <p className="about-page-footer">
          <Link to="/" className="about-page-back">
            Retour à l’accueil
          </Link>
        </p>
      </main>
    </div>
  );
}
