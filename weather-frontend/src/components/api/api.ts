import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchWeather = async (city: string) => {
  const response = await axios.get(`${apiUrl}/current`, {
    params: { city },
  });
  const { name, main, sys, weather } = response.data;
  return { name, temp: main.temp, country: sys.country, weather };
};

export const fetchHistory = async () => {
  const response = await axios.get(`${apiUrl}/history`);
  return response.data;
};
