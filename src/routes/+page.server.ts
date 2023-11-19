import { WeatherClient } from '$lib/weather-client';
import type { PageServerLoad } from './$types';

WeatherClient.initialize(import.meta.env['VITE_WEATHER_API_KEY']);

export const load: PageServerLoad = async () => {
	const nowcast = await WeatherClient.getNowcast({
		baseDate: '20231119',
		baseTime: '2158',
		nx: 60,
		ny: 127
	});

	return { nowcast };
};
