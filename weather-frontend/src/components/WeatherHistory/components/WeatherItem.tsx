import { weatherStatus } from "../../WeatherSearch/helpers";
import { WeatherStatusProps } from "../../WeatherSearch/types";
import * as S from "../styles";

export const WeatherItem = ({
  name,
  image,
  temp,
  description,
  country,
  loader,
}: WeatherStatusProps) => {
  return (
    <li css={S.HistoryItem} className={loader}>
      <div>
        <p css={S.Name}>
          {name}, {country}
        </p>
        <p css={S.Description}>{description}</p>
      </div>
      <div css={S.Status}>
        <p>{temp}</p>
        <img
          src={weatherStatus[image] || weatherStatus.Default}
          alt={description}
          width={51}
          height={51}
        />
      </div>
    </li>
  );
};
