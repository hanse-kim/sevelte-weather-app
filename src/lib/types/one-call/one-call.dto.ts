import type { AlertsDto } from './alerts.dto';
import type { CurrentForecastDto } from './current-forecast.dto';
import type { DailyForecastDto } from './daily-forecast.dto';
import type { HourlyForecastDto } from './hourly-forecast.dto';

export type OneCallDto = {
  lat: number;
  lon: number;
  timezone: string;
  timezoneOffset: number;
  current: CurrentForecastDto;
  hourly: HourlyForecastDto[];
  daily: DailyForecastDto[];
  alerts: AlertsDto;
};
