<script lang="ts">
  import { DateUtils } from '$lib/utils/date.utils';
  import type { PageData } from './$types';

  export let data: PageData;

  const { current, daily, hourly } = data.oneCall;
  const today = daily[0];
</script>

<section class="current">
  <h1>{current.temp}°C</h1>
  <p>
    {current.weather[0].description}
  </p>
  <p>{today.temp.max}°C / {today.temp.min}°C</p>
  <p>
    체감온도: {current.feelsLike}°C
  </p>
</section>

<section class="hourly">
  <div>
    {#each hourly as hour, index (index)}
      <div>
        {DateUtils.format(hour.dt, 'A hh시')}
        <br />
        {hour.temp}°C
        <br />
        {hour.weather[0].description}
        <br />
        {Math.round(hour.pop * 100)}%
      </div>
    {/each}
  </div>
</section>

<style>
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
