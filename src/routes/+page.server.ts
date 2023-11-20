import { WeatherClient } from '$lib/weather-client';
import dayjs from 'dayjs';
import type { PageServerLoad } from './$types';

WeatherClient.initialize(import.meta.env['VITE_WEATHER_API_KEY']);

export const load: PageServerLoad = async () => {
  const now = dayjs().subtract(10, 'minute');

  const nowcast = await WeatherClient.getNowcast({
    baseDate: now.format('YYYYMMDD'),
    baseTime: `${now.format('HH')}${now.minute() > 30 ? '30' : '00'}`,
    nx: 60,
    ny: 127,
  });

  return { nowcast };
};
