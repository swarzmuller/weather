import { useEffect, useState } from 'react';
import axios from 'axios';

export const WeatherList = () => {
  const [history, setHistory] = useState<any>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await axios.get(`/weather/history`);
      setHistory(data);
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h1>Recent Searches</h1>
      <ul>
        {history.map((item: any, index: any) => (
          <li key={index}>
            {item.city} - {new Date(item.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};
