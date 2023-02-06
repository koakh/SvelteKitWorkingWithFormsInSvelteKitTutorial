<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ButtonEventForwarding from '$lib/components/ButtonEventForwarding.svelte';
	import { isOverlayOpen } from '$lib/stores';
	import NameList from './components/NameList.svelte';

	// handlers
	const handleShowModalButtonClick = () => {
		isOverlayOpen.set(true);
	};
</script>

<div>
	<Button clickHandle={handleShowModalButtonClick}>Open Modal</Button>
	<!-- handle the child event passed with event forwording -->
	<ButtonEventForwarding on:click={handleShowModalButtonClick}
		>Open Modal with Event Forwarding</ButtonEventForwarding
	>

  <!-- Slot Props demo, let the parent of NameList control what should show-->
	<NameList>
		<!-- slot props with let directive ex let:firstName and let:lastName -->
		<h3 class="bg-blue-100" slot="hero" let:firstName let:lastName>
			{firstName}
			{lastName}
		</h3>
	</NameList>
	<NameList>
		<!-- slot props with let directive ex let:firstName and let:lastName -->
		<h3 class="bg-green-100" slot="hero" let:firstName let:lastName>
			{lastName}
			{firstName}
		</h3>
	</NameList>
	<NameList>
		<!-- slot props with let directive ex let:firstName and let:lastName -->
		<h3 class="bg-red-100" slot="hero" let:firstName>
			{firstName}
		</h3>
	</NameList>
</div>
