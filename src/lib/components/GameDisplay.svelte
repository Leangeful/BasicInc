<script lang="ts">
	import { Game } from '$lib/game/Game';
	import CharacterDisplay from '$lib/components/CharacterDisplay.svelte';
	import IncrementerComp from '$lib/components/IncrementerComp.svelte';
	import { onMount } from 'svelte';
	import { load, save } from '$lib/game/Save';

	let game: Game = new Game();
	let gameWorker: Worker | undefined = undefined;

	const onWorkerMessage = ({ data: { msg } }: MessageEvent) => {
		if (msg == 'tick') {
			game.process();
			game = game;
		}
	};

	const loadWorker = async () => {
		const SyncWorker = await import('$lib/worker/game.worker?worker');
		gameWorker = new SyncWorker.default();
		gameWorker.onmessage = onWorkerMessage;

		gameWorker.postMessage({
			msg: 'start',
			data: { value: game.settings.tickspeed } //TODO change with settings
		});
	};

	onMount(() => {
		loadWorker();
		game = new Game(load());
	});
</script>

<div class="flex flex-col mx-auto gap-y-4 items-center w-full">
	<h2 class="h2 w-fit mt-4">{game.data.n.toFixed(0)}</h2>

	<IncrementerComp value={game.data.clicker} />

	<CharacterDisplay character={game.data.character} />
	<button
		class="btn variant-filled-primary w-full max-w-sm"
		on:click={() => game.data.character.level++}
	>
		Increase Level
	</button>
	<button class="btn variant-filled-primary w-full max-w-sm" on:click={() => save(game.data)}>
		Save
	</button>
</div>

<style lang="postcss">
</style>
