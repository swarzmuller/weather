export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Data {
  name: string;
  temp: number;
  country: string;
  weather: Weather[];
}

export interface WeatherStatusProps extends Omit<Data, 'weather'> {
  description: string;
  image: string;
  loader?: string;
  focused?: boolean;
}
