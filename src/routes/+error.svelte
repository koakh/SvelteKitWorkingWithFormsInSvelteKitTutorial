<script>
	import CustomMessage, { MessageType } from '$lib/components/CustomMessage.svelte';

	import { page } from '$app/stores';
</script>

<CustomMessage type={MessageType.DANGER}>
	<h1>It seems there has been an error, sorry about that.</h1>
	{#if $page?.error}
		{#if $page?.status}
			<p>Page status: {$page?.status}</p>
		{/if}
		{#if $page?.error?.message}
			<p>Error message: {$page?.error?.message}</p>
		{/if}
	{/if}
</CustomMessage>