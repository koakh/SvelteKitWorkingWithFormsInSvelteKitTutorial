<script lang="ts">
	import RegistrationForm from '$lib/components/RegistrationForm.svelte';
	import { ValidateTokenStatus } from './types/enums';

	export let data;
	export let form;

	$: console.log(form);
</script>

{#if data.status == ValidateTokenStatus.INVALID}
	<h1>INVALID TOKEN</h1>
{:else if data.status == ValidateTokenStatus.EXPIRED}
	<h1>EXPIRED TOKEN</h1>
{:else}
	<!-- required to pass form data to component -->
	<RegistrationForm {form} />
{/if}

{#if data?.countries}
	{#each data.countries as item}
		<p>{item.name}</p>
	{/each}
{/if}
