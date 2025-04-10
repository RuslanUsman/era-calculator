import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CalculatorExplosion.css';

const CalculatorExplosion = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/');
  };

  return (
    <div className="dragon-web-app">
      <div className="header">
        <h1>Добро пожаловать в Спомогатор</h1>
        <h2>
            Калькулятор взрыва
        </h2>
      </div>
      <button onClick={handleNextClick} className="next-button">
        Далее
      </button>
    </div>
  );
};

export default CalculatorExplosion;