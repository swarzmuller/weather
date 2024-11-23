import { Data, Weather } from "../WeatherSearch/types";

export interface HistoryResponse {
  main: Pick<Data, "temp">;
  name: Data["name"];
  sys: Pick<Data, "country">;
  weather: Pick<Weather, "description" | "main">[];
}

export interface WeatherHistoryData {
  city: string;
  createdAt: string;
  response: HistoryResponse;
}
