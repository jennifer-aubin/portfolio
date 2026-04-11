import { Navigate, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
// Page « À propos » : code conservé dans ./pages/AboutPage.jsx — pour réactiver, importer AboutPage
// et remplacer la route ci-dessous par element={<AboutPage />}. Remettre aussi le lien dans Navbar.

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a-propos" element={<Navigate to="/" replace />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
