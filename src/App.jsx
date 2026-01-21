// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts.jsx'

function App() {
  return ( <I18nextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  </I18nextProvider>
    
  );
}

export default App;
