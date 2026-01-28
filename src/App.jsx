// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio';
import ProjectPage from './pages/ProjectPage.jsx'; // Нова сторінка для проекту
import Contacts from './pages/Contacts.jsx';
import './App.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectPage />} /> {/* Додаємо динамічний маршрут */}
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;