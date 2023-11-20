import type { ResultCode } from '$lib/weather-client/types/_common';

export type NowcastDto = {
  response: {
    header: {
      resultCode: ResultCode;
      resultMsg: string;
    };
    body: {
      dataType: string;
      items: {
        item: FieldItem[];
      };
      pageNo: number;
      numOfRows: number;
      totalCount: number;
    };
  };
};

type FieldItem = {
  baseDate: string;
  baseTime: string;
  category: NowcastFieldCategory;
  nx: number;
  ny: number;
  obsrValue: string;
};

export enum NowcastFieldCategory {
  /** 기온 */
  T1H = 'T1H',
  /** 1시간 강수량 */
  RN1 = 'RN1',
  /** 동서바람성분 */
  UUU = 'UUU',
  /** 남북바람성분 */
  VVV = 'VVV',
  /** 습도 */
  REH = 'REH',
  /** 강수형태 */
  PTY = 'PTY',
  /** 풍향 */
  VEC = 'VEC',
  /** 풍속 */
  WSD = 'WSD'
}
