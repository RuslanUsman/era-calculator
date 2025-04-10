import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Results.css';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const quantity = parseInt(params.get('quantity'), 10);

  const getComponentDetails = (name) => {
    switch (name) {
      case 'Бобовка':
        return { порох: quantity * 60, сера: quantity * 120, уголь: quantity * 180, железо: quantity * 20 };

      case 'Динамит':
        return { взрывчатка: quantity * 5, порох: quantity * 250, сера: quantity * 500, уголь: quantity * 750,  железо: quantity * 50, бечевка: quantity * 2, топливо: quantity * 15};

      case 'С4':
        return { взрывчатка: quantity * 15, порох: quantity * 750, сера: quantity * 1500, уголь: quantity * 2250,  железо: quantity * 150, бечевка: quantity * 2, топливо: quantity * 45, деталь: quantity * 2};

        case 'Гексоген':
        return { взрывчатка: quantity * 25, порох: quantity * 1250, сера: quantity * 2500, уголь: quantity * 3750, железо: quantity * 250, топливо: quantity * 75 };

        case 'Простая ракета':
        return { взрывчатка: quantity * 3, металпотрон: quantity * 2, порох: quantity * 150, сера: quantity * 300, уголь: quantity * 450,  железо: quantity * 30, топливо: quantity * 9 };

        case 'Ракета':
        return { взрывчатка: quantity * 15, порох: quantity * 750, сера: quantity * 1500, уголь: quantity * 2250,  железо: quantity * 150, бечевка: quantity * 2, топливо: quantity * 45 };

        case 'Граната':
        return { взрывчатка: quantity * 3, пружина: quantity * 3, порох: quantity * 150, сера: quantity * 300, уголь: quantity * 450,  железо: quantity * 30, топливо: quantity * 9 };

        case 'Граната из сплава':
        return { взрывчатка: quantity * 30,  пружина: quantity * 5, порох: quantity * 1500, сера: quantity * 3000, уголь: quantity * 4500,  железо: quantity * 100, топливо: quantity * 90 };

        case 'Ракета РСЗО':
        return { взрывчатка: quantity * 3,  металпотрон: quantity * 1, порох: quantity * 150, сера: quantity * 300, уголь: quantity * 450,  железо: quantity * 30, топливо: quantity * 9  };

      default:
        return { порох: 0, сера: 0, уголь: 0 };
    }
  };

  const details = getComponentDetails(name);

  return (
    <div className="Results">
      <h1>Результаты</h1>
      <h2>{name}</h2>
      {quantity > 0 && (
        <>

      <p>Количество взрывчаики: {details.взрывчатка}</p>
      <p>Количество пороха: {details.порох}</p>
      <p>Количество серы: {details.сера}</p>
      <p>Количество угля: {details.уголь}</p>
      <p>Количество железа: {details.железо}</p>
      <p>Количество топливо: {details.топливо}</p>
      <p>Количество бечевки: {details.бечевка}</p>
      <p>Количество металл. патрон: {details.металпотрон}</p>
      <p>Количество пружин: {details.пружина}</p>
      </>
      )}
     
      
      
          
      <button onClick={() => navigate('/')}>Главное меню</button>
    </div>
  );
}

export default Results;

