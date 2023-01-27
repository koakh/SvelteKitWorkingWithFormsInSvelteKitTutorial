<script lang="ts">
	import { isOverlayOpen } from '$lib/stores';
  import { fade } from 'svelte/transition';
	// handlers
	const handleHideModalButtonClick = () => {
		isOverlayOpen.set(false);
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="fixed z-10 w-screen h-screen top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-90"
	on:click={handleHideModalButtonClick}
  transition:fade={{duration: 100}}
>
	<div
		class="relative bg-white text-grey-700 rounded-md px-8 py-10 max-w-lg shadow-xl"
		on:click|stopPropagation
	>
		<button
			class="absolute top-0 right-2 text-4xl text-gray-300 hover:-translate-y-0.5 transition-transform"
			on:click={handleHideModalButtonClick}
		>
			&times;
		</button>
		<slot />
	</div>
</div>
