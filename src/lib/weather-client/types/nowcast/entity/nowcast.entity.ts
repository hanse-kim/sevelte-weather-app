import type { PrecipitationType } from '$lib/weather-client/types/common';

/** 초단기실황 */
export type Nowcast = {
	/** 기온 (°C) */
	temperature: number;
	/** 1시간 강수량 (mm) */
	precipitationAtHour: number;
	/** 동서바람성분 풍속 (m/s) */
	uComponentWindSpeed: number;
	/** 남북바람성분 풍속 (m/s) */
	vComponentWindSpeed: number;
	/** 습도 (%) */
	humidity: number;
	/** 강수형태 */
	precipitationType: PrecipitationType;
	/** 풍향 (deg) */
	windDirection: number;
	/** 풍속 (m/s) */
	windSpeed: number;
};
