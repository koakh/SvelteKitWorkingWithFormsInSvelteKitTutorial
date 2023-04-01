<script lang="ts">
	import ModalOverlay from '$lib/components/ModalOverlay.svelte';
	import { isOverlayOpen } from '$lib/stores';
	import '../app.css';
</script>

<!-- modal overlay -->
{#if $isOverlayOpen}
	<ModalOverlay>
		<div class="flex flex-row space-x-4">
			<div class="basis-1/2">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class="border-grey-600 border-2 shadow-xl rounded-xl" src="https://picsum.photos/300/300" alt="some image" />
			</div>
			<div class="basis-1/2">
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.
				</p>
			</div>
		</div>
	</ModalOverlay>
{/if}

<main>
	<slot />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.200);
	}
</style>