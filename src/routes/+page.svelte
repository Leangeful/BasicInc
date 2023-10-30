<script lang="ts">
	import GameDisplay from '$lib/components/GameDisplay.svelte';
	import BarLead from '$lib/components/navigation/BarLead.svelte';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import { Drawer, AppShell, AppBar } from '@skeletonlabs/skeleton';

	function navevent(e: CustomEvent) {
		console.debug(e);
	}
</script>

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation on:nav={navevent} />
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<BarLead />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/Leangeful/BasicInc"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<div class="flex h-full">
		<div class="nav hidden lg:block lg:w-64">
			<Navigation on:nav={navevent} />
		</div>

		<div class="">try blubb5 actions</div>
		<GameDisplay />
	</div>
</AppShell>
