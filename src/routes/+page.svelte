<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const { nowcast } = data;
</script>

<h1>현재 기온: {nowcast.temperature}°C</h1>
