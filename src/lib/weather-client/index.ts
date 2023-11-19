import { HttpClient } from '@hanse-kim/http-client';
import type { PrecipitationType } from './types/common';
import { NowcastFieldCategory, type NowcastDto } from './types/nowcast/dto/nowcast.dto';
import type { GetNowcastRequestDto } from './types/nowcast/dto/request/get-nowcast.dto';
import type { Nowcast } from './types/nowcast/entity/nowcast.entity';

export class WeatherClient {
	private static _API_KEY = '';
	private static _DATA_TYPE = 'JSON';
	private static _API_HOST = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0';

	static initialize(apiKey: string) {
		this._API_KEY = apiKey;
	}

	static async getNowcast({ baseDate, baseTime, ...dto }: GetNowcastRequestDto) {
		if (!this._API_KEY) {
			throw new Error('API key does not exist.');
		}

		const url = `${this._API_HOST}/getUltraSrtNcst`;
		const params = {
			serviceKey: this._API_KEY,
			dataType: this._DATA_TYPE,
			...dto,
			base_date: baseDate,
			base_time: baseTime
		};

		const response = await HttpClient.instance.get<NowcastDto>(url, {
			query: params
		});

		return this.parseNowcastDto(response.data);
	}

	private static parseNowcastDto(dto: NowcastDto): Nowcast {
		const entries = dto.response.body.items.item.map((item) => [item.category, item.obsrValue]);
		const fields: Record<NowcastFieldCategory, string> = Object.fromEntries(entries);

		return {
			temperature: Number(fields[NowcastFieldCategory.T1H]),
			precipitationAtHour: Number(fields[NowcastFieldCategory.RN1]),
			uComponentWindSpeed: Number(fields[NowcastFieldCategory.UUU]),
			vComponentWindSpeed: Number(fields[NowcastFieldCategory.VVV]),
			humidity: Number(fields[NowcastFieldCategory.REH]),
			precipitationType: fields[NowcastFieldCategory.PTY] as PrecipitationType,
			windDirection: Number(fields[NowcastFieldCategory.VEC]),
			windSpeed: Number(fields[NowcastFieldCategory.WSD])
		};
	}
}
