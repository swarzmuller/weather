import React, { useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { fetchWeather } from "../api";
import { WeatherStatus } from "./components/WeatherStatus";
import { weatherStatus } from "./helpers";
import { Data } from "./types";
import * as S from "./styles";

export const WeatherSearch = () => {
  const [weather, setWeather] = useState<Data>();
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef<null | HTMLInputElement>(null);

  const loader = loading ? "loading" : "";
  const image = weather?.weather[0].main
    ? weatherStatus[weather.weather[0].main]
    : weatherStatus.Default;

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const city = ref.current?.value as string;
    setLoading(true);
    fetchWeather(city)
      .then((data) => {
        setWeather(data);
        setLoading(false);
        setError('');
        localStorage.setItem("cachedWeather", JSON.stringify(data));
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useLayoutEffect(() => {
    const cachedWeather = localStorage.getItem("cachedWeather");
    if (cachedWeather) {
      setWeather(JSON.parse(cachedWeather));
    }
  }, []);

  return (
    <div css={S.Wrapper}>
      {weather ? (
        <WeatherStatus
          name={weather.name}
          image={image}
          temp={weather.temp}
          description={weather.weather[0].description}
          country={weather.country}
          loader={loader}
          focused={focused}
        />
      ) : (
        <h1>Please enter the name of the city</h1>
      )}

      <form onSubmit={handleSubmit} css={[S.Item, S.Form]}>
        <p css={S.FormLabel}>Enter the city</p>
        <input
          ref={ref}
          type="text"
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Start entering the name of the city"
          css={S.Input}
        />
        <button css={S.Button}>Submit</button>
        {error ? <p css={S.Error}>{error}</p> : null}
        <Link css={S.ShowLink} to="/list">
          Show history
        </Link>
      </form>
    </div>
  );
};
