<script lang="ts">
	import type { Stats } from '$lib/game/GameInterfaces';

	export let stats: Stats;
</script>

<div class="stats">
	{#each Object.entries(stats) as [name, value]}
		<div class="stat flex-auto" id={name}>
			<span class="sname">{name}:</span>
			<span class="svalue float-right ml-10">{value}</span>
		</div>
	{/each}
</div>

<style>
</style>
