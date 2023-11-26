<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const { current, daily } = data.oneCall;
  const today = daily[0];
</script>

<h1>{current.temp}°C</h1>
<p>
  {current.weather[0].description}
</p>
<p>{today.temp.max}°C / {today.temp.min}°C</p>
<p>
  체감온도: {current.feelsLike}°C
</p>
