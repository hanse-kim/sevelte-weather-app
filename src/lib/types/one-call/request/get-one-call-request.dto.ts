export type GetOneCallRequestDto = {
  lat: number;
  lon: number;
  appid: string;
  exclude: ExcludeKey[];
  units: 'metric';
  lang: 'kr';
};

type ExcludeKey = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts';
