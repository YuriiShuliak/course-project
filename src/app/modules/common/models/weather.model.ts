export interface ICity {
  name: string;
  id: number;
  isFav: boolean;
}
export interface ICityWeather {
  coord: any;
  weather: any[];
  base: string;
  clouds: any;
  cod: number;
  dt: number;
  id: number;
  main: any;
  name: string;
  visibility: string;
  sys: any;
  wind: any;
}
