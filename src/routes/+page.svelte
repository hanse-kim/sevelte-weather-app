<script lang="ts">
  import { FormatUtils } from '$lib/utils/format.utils';
  import dayjs from 'dayjs';
  import type { PageData } from './$types';

  export let data: PageData;

  const { current, daily, hourly } = data.oneCall;
  const today = daily[0];
</script>

<section class="current">
  <h1>{FormatUtils.formatTemperature(current.temp)}°</h1>
  <p>
    {current.weather[0].description}
  </p>
  <p>
    {FormatUtils.formatTemperature(today.temp.max)}° / {FormatUtils.formatTemperature(
      today.temp.min,
    )}°
  </p>
  <p>
    체감온도: {current.feelsLike}°
  </p>
</section>

<section class="hourly">
  <div>
    {#each hourly as hour, index (index)}
      <div>
        {FormatUtils.formatDate(hour.dt, 'A hh시')}
        <br />
        {FormatUtils.formatTemperature(hour.temp)}°
        <br />
        {hour.weather[0].description}
        <br />
        {FormatUtils.formatPop(hour.pop)}%
      </div>
    {/each}
  </div>
</section>

<section class="daily">
  {#each daily as day, index (index)}
    <div>
      {dayjs.unix(day.dt).isSame(dayjs(), 'date') ? '오늘' : FormatUtils.formatDate(day.dt, 'ddd')} /
      {FormatUtils.formatPop(day.pop)}% / {day.weather[0].description} / {FormatUtils.formatTemperature(
        day.temp.max,
      )}° / {FormatUtils.formatTemperature(day.temp.min)}°
    </div>
  {/each}
</section>

<style>
  section {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .hourly div {
    display: flex;
    max-width: 720px;
    overflow-x: auto;
    column-gap: 8px;
  }

  .hourly div div {
    flex-shrink: 0;
  }
</style>
