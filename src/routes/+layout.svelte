<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<slot />

<style>
	@import 'https://unpkg.com/@picocss/pico@latest/css/pico.min.css';

	:global(body) {
		padding: 2rem;
	}

	:global(input, button) {
		border-radius: 1rem;
	}
</style>
