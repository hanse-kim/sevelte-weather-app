<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const { current } = data.oneCall;
</script>

<h1>{current.temp}°C</h1>
<p>
  {current.weather[0].description}
</p>
<p>
  체감온도: {current.feelsLike}°C
</p>
