import type { OneCallDto } from '$lib/types/one-call/one-call.dto';
import type { GetOneCallRequestDto } from '$lib/types/one-call/request/get-one-call-request.dto';
import { HttpClient } from '@hanse-kim/http-client';
import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';
import type { LayoutServerLoad } from './$types';

const API_KEY = import.meta.env['VITE_OPEN_WEATHER_API_KEY'];

const client = new HttpClient({
  baseUrl: 'https://api.openweathermap.org/data/3.0',
  interceptors: {
    responseInterceptor: (response) => {
      return { ...response, data: camelcaseKeys(response.data, { deep: true }) };
    },
  },
});

export const load: LayoutServerLoad = async () => {
  const lat = 37.5518911;
  const lon = 126.9917937;

  const oneCall = await getOneCall({
    lat,
    lon,
    exclude: ['minutely'],
    units: 'metric',
    lang: 'kr',
    appid: API_KEY,
  });

  const nowIndexInHourly = oneCall.hourly.findIndex((data) =>
    dayjs.unix(data.dt).isSame(dayjs(), 'hour'),
  );
  oneCall.hourly = oneCall.hourly.slice(nowIndexInHourly + 1, nowIndexInHourly + 25);
  console.log(oneCall.daily[0], oneCall.current, oneCall.hourly[0]);
  console.log(oneCall.daily.map((day) => dayjs.unix(day.dt).toString()));

  return { oneCall };
};

const getOneCall = async (dto: GetOneCallRequestDto) => {
  const response = await client.get<OneCallDto>('/onecall', {
    query: {
      ...dto,
      exclude: dto.exclude.join(','),
    },
  });

  return response.data;
};
