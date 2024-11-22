import * as S from "../styles";
import { WeatherStatusProps } from "../types";

export const WeatherStatus = ({
  name,
  image,
  temp,
  description,
  country,
  loader,
  focused,
}: WeatherStatusProps) => {
  return (
    <div css={S.Item}>
      <div className={loader}>
        <img
          css={S.Image(Boolean(focused))}
          src={image}
          alt={description}
          width={278}
          height={278}
        />
      </div>
      <div className={loader}>
        <p css={S.Place}>
          {name}, {country}
        </p>
        <p css={S.Temp}>{temp}</p>
        <p css={S.Description}>{description}</p>
      </div>
    </div>
  );
};
