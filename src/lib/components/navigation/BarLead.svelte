<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		console.debug('open drawer');
		drawerStore.open();
	}
</script>

<div class="flex items-center">
	<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
		<span>
			<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
				<rect width="100" height="20" />
				<rect y="30" width="100" height="20" />
				<rect y="60" width="100" height="20" />
			</svg>
		</span>
	</button>
	<strong class="text-xl"><span class="text-primary-500">basic</span>INC</strong>
</div>
