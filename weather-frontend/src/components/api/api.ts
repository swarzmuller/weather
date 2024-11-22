import axios from "axios";

export const fetchWeather = async (city: string) => {
  const response = await axios.get("/weather/current", { params: { city } });
  const { name, main, sys, weather } = response.data;
  return { name, temp: main.temp, country: sys.country, weather };
};

export const fetchHistory = async () => {
  const response = await axios.get(`/weather/history`);
  return response.data;
};
