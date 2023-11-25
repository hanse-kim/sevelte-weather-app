import type { BaseForecastDto } from './_common';

export type CurrentForecastDto = BaseForecastDto & {
  /** 일출(UTC) */
  sunrise: number;
  /** 일몰(UTC) */
  sunset: number;
  /** 온도(°C) */
  temp: number;
  /** 체감온도(°C) */
  feelsLike: number;
  /** 자외선지수 */
  uvi: number;
  /** 평균 가시거리(km) */
  visibility: number;
};
