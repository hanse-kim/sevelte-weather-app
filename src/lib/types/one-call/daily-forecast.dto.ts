import type { BaseForecastDto } from './_common';

export type DailyForecastDto = BaseForecastDto & {
  /** 일출(UTC) */
  sunrise: number;
  /** 일몰(UTC) */
  sunset: number;
  /** 월출(UTC) */
  moonrise: number;
  /** 월몰(UTC) */
  moonset: number;
  /** 달의 위상(0~1)
   *
   * - 0, 1: 그믐달
   * - 0.25: 상현달
   * - 0.5: 보름달
   * - 0.75: 하현달
   */
  moonPhase: number;
  summary: string;
  temp: {
    morn: number;
    day: number;
    eve: number;
    night: number;
    min: number;
    max: number;
  };
  feelsLike: {
    morn: number;
    day: number;
    eve: number;
    night: number;
  };
  /** 강수량(mm) */
  rain: number;
  /** 자외선지수 */
  uvi: number;
};
