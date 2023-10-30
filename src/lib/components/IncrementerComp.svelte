<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton';

	export let id = '0';
	export let name = 'Incrementer';
	export let value = 0;
	export let canUpgrade = false;
</script>

<div id="inc-{id}" class="incrementer card p-4 w-full max-w-sm relative mx-auto">
	{#if canUpgrade}
		<button
			class="btn-upgrade button text-5xl w-14 rounded-full variant-outline-primary variant-filled-glass top-0 left-1/2 absolute aspect-square -translate-x-1/2 -translate-y-1/2"
			>+</button
		>
	{/if}

	<div class="text-lg">
		<span class="text-primary-500">{name}:</span>
		<span class="float-right">{value.toFixed(0)}</span>
	</div>

	<ProgressBar min={0} max={100} {value} height="h-4" />
</div>
