import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const WeatherForm = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    const { data } = await axios.get(`/weather/current`, { params: { city } });
    console.log(data)
    setWeather(data);
    localStorage.setItem('lastWeather', JSON.stringify(data));
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp} °C</p>
        </div>
      )}

      <Link to="/list">list</Link>
    </div>
  );
};
