import type { GetOneCallRequestDto } from '$lib/types/one-call/request/get-one-call-request.dto';
import { HttpClient } from '@hanse-kim/http-client';
import camelcaseKeys from 'camelcase-keys';
import type { PageServerLoad } from './$types';
import type { OneCallDto } from '$lib/types/one-call/one-call.dto';
import dayjs from 'dayjs';

const apiKey = import.meta.env['VITE_OPEN_WEATHER_API_KEY'];
const client = new HttpClient({
  baseUrl: 'https://api.openweathermap.org/data/3.0',
  interceptors: {
    responseInterceptor: (response) => {
      return { ...response, data: camelcaseKeys(response.data, { deep: true }) };
    },
  },
});

export const load: PageServerLoad = async () => {
  const lat = 37.5518911;
  const lon = 126.9917937;

  const oneCall = await getOneCall({
    lat,
    lon,
    exclude: ['minutely'],
    units: 'metric',
    lang: 'kr',
    appid: apiKey,
  });

  console.log(oneCall.hourly?.map((data) => dayjs.unix(data.dt).toString()));

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
