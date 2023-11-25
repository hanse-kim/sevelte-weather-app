import type { BaseForecastDto } from './_common';

export type HourlyForecastDto = BaseForecastDto & {
  /** 강수확률(0~1) */
  pop: number;
  /** 온도(°C) */
  temp: number;
  /** 체감온도(°C) */
  feelsLike: number;
};
