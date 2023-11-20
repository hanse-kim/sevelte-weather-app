/** 강수형태 */
export enum PrecipitationType {
  /** 없음 */
  None = '0',
  /** 비 */
  Rain = '1',
  /** 비/눈 */
  RainAndSnow = '2',
  /** 눈 */
  Snow = '3',
  /** 빗방울 */
  LightRain = '5',
  /** 빗방울눈날림 */
  LightRainAndSnow = '6',
  /** 눈날림 */
  LightSnow = '7'
}

/** 응답코드 */
export enum ResultCode {
  NORMAL_SERVICE = '00',
  APPLICATION_ERROR = '01',
  DB_ERROR = '02',
  NODATA_ERROR = '03',
  HTTP_ERROR = '04',
  SERVICETIME_OUT = '05',
  INVALID_REQUEST_PARAMETER_ERROR = '10',
  // INVALID_REQUEST_PARAMETER_ERROR = '11',
  NO_OPENAPI_SERVICE_ERROR = '12',
  SERVICE_ACCESS_DENIED_ERROR = '20',
  TEMPORARILY_DISABLE_THE_SERVICEKEY_ERROR = '21',
  LIMITED_NUMBER_OF_SERVICE_REQUESTS_EXCEEDS_ERROR = '22',
  SERVICE_KEY_IS_NOT_REGISTERED_ERROR = '30',
  DEADLINE_HAS_EXPIRED_ERROR = '31',
  UNREGISTERED_IP_ERROR = '32',
  UNSIGNED_CALL_ERROR = '33',
  UNKNOWN_ERROR = '99'
}
