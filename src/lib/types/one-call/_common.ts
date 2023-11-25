export type BaseForecastDto = {
  /** 시간(UTX) */
  dt: number;
  /** 기압(hPa) */
  pressure: number;
  /** 습도(%) */
  humidity: number;
  /** 이슬점(°C) */
  dewPoint: number;
  /** 풍속(m/s) */
  windSpeed: number;
  /** 풍향(deg) */
  windDeg: number;
  /** 돌풍(m/s) */
  windGust: number;
  weather: Weather[];
  /** 구름 낀 정도(%) */
  clouds: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
