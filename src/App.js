import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainMenu from './components/MainMenu';
import Results from './components/Results';
import EraCalculator from './components/EraCalculator'; // Новый компонент

import './App.css';

const App = () => {
  return (
    <Router basename="/era-calculator">
      <div>
        {/* Основное содержимое */}
        <main>
          <Routes>
            {/* Главная страница: MainMenu */}
            <Route path="/" element={<MainMenu />} />
            {/* Маршрут для EraCalculator */}
            <Route path="/era-calculator" element={<EraCalculator />} />
            {/* Маршрут для Results */}
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
