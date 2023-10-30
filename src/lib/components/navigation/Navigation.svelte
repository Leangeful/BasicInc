<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';

	import { base } from '$app/paths';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	const dispatch = createEventDispatcher();
	function itemClicked(e: MouseEvent) {
		drawerClose();
		dispatch('nav');
	}
</script>

<nav class="list-nav p-4 bg-surface-500/5 h-full">
	<!-- <li><button class="btn variant-filled-primary my-4 w-full">Home</button></li>
	<li><button class="btn variant-filled-primary my-4 w-full">x</button></li> -->
	<ul class="">
		<!-- <li><a class="" href="{base}/" on:click={drawerClose}>Homepage</a></li>
		<li><a class="" href="{base}/about" on:click={drawerClose}>About</a></li>
		<li><a class="" href="{base}/blog" on:click={drawerClose}>Blog</a></li> -->
		<li>
			<button
				class="btn variant-outline-primary"
				id="nav-settings"
				on:click={drawerClose}
				on:click={(e) => itemClicked(e)}>Settings</button
			>
		</li>
	</ul>
</nav>
