<script lang="ts">
	import type { Character } from '$lib/game/Character';
	import StatDisplay from './StatDisplay.svelte';

	export let character: Character;
</script>

<div class="character mx-auto flex flex-col w-full max-w-sm text-lg">
	<div class="name text-primary-500">{character.name}</div>
	<div class="level">{character.level}</div>
	<StatDisplay stats={character.stats} />
</div>

<style>
</style>
