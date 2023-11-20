<script lang="ts">
  import { PrecipitationType } from '$lib/weather-client/types/_common';
  import type { PageData } from './$types';

  export let data: PageData;
  const { nowcast } = data;

  const precipitation: Record<PrecipitationType, string> = {
    [PrecipitationType.None]: '맑음',
    [PrecipitationType.Rain]: '비',
    [PrecipitationType.Snow]: '눈',
    [PrecipitationType.RainAndSnow]: '비와 눈',
    [PrecipitationType.LightRain]: '약한 비',
    [PrecipitationType.LightSnow]: '약한 눈',
    [PrecipitationType.LightRainAndSnow]: '약한 비와 눈',
  };
</script>

<h1>현재 기온: {nowcast.temperature}°C</h1>
<p>날씨: {precipitation[nowcast.precipitationType]}</p>
{#if nowcast.precipitationType !== PrecipitationType.None}
  <p>강수량: {nowcast.precipitationAtHour}mm</p>
{/if}
<p>풍속: {nowcast.windSpeed}m/s</p>
