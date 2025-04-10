import { BrowserRouter as Router, Routes, Route, Link, useLocation,  } from 'react-router-dom';

import React from 'react';


import CalculatorExplosion from './components/CalculatorExplosion';
import MainMenu from './components/MainMenu';
import Results from './components/Results';

import './App.css';

const MainContent = () => {
  const location = useLocation();

  const hiddenFooterPaths = [
    '/dragon-web-app', '/main-menu', '/materials', '/construction',
    '/result', '/menu', '/calculator-explosion', '/results',
    '/tal', '/instinct', '/intellect', '/fight', '/pricelist', '/talant-lios'
  ];
  const showFooter = !hiddenFooterPaths.includes(location.pathname);

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/calculator-explosion" element={<CalculatorExplosion />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </main>
      {showFooter && (
        <footer>
          <p>© 2025 Dragon. Все права защищены.</p>
          <div className="footer-buttons">
            <Link to="/main-menu">
              <button className="animated-button">Калькулятор рейда</button>
            </Link>
          </div>
        </footer>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <Link to="/">Главная</Link>
          </nav>
        </header>
        <MainContent />
      </div>
    </Router>
  );
};

export default App;
