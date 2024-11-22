import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";
import { fetchHistory } from "../api";
import { WeatherItem } from "./components/WeatherItem";
import { Wrapper } from "../WeatherSearch/styles";
import { WeatherHistoryData } from "./types";
import * as S from "./styles";

export const WeatherHistory = () => {
  const [history, setHistory] = useState<WeatherHistoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const loader = loading ? "loading" : "";

  useLayoutEffect(() => {
    const cachedHistory = localStorage.getItem("cachedHistory");
    if (cachedHistory) {
      setHistory(JSON.parse(cachedHistory));
    }
    fetchHistory().then((data) => {
      setHistory(data);
      localStorage.setItem("cachedHistory", JSON.stringify(data));
      setLoading(false);
    });
  }, []);

  return (
    <div css={[Wrapper, S.HistoryWrapper]}>
      <Link css={S.BackLink} to="/main">
        <img src={Arrow} alt="Arrow" />
        Weather history
      </Link>
      {history.length !== 0 ? (
        <ul css={S.List}>
          {history.map((item, index) => (
            <WeatherItem
              key={index}
              name={item.response.name}
              image={item.response.weather[0].main}
              temp={item.response.main.temp}
              description={item.response.weather[0].description}
              country={item.response.sys.country}
              loader={loader}
            />
          ))}
        </ul>
      ) : (
        // <div css={{ height: "100vh", width: "100%" }} className={loader}></div>
        null
      )}
    </div>
  );
};
