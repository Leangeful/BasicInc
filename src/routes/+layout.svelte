<script lang="ts">
	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';

	export const prerender = true;

	initializeStores();
</script>

<slot />
