import { Weather } from "../WeatherSearch/types";

export interface WeatherHistoryData {
  city: string;
  createdAt: string;
  response: {
    main: {
      temp: number;
    };
    name: string;
    sys: {
      country: string;
    };

    weather: Pick<Weather, "description" | "main">[];
  };
}
