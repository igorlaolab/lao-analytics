// src/pages/Analytics.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface AnalyticsData {
  // Определите структуру данных, которую возвращает ваш backend
  [key: string]: any;
}

const Analytics: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    // Пример запроса к вашему backend API для получения аналитики
    fetch('https://your-backend-api.com/analytics')
      .then(response => response.json())
      .then((result: AnalyticsData) => setData(result))
      .catch(err => console.error('Ошибка получения данных:', err));
  }, []);

  return (
    <div>
      <h1>Аналитика</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Загрузка данных...</p>
      )}
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default Analytics;
