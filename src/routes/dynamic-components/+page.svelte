<script lang="ts">
	import type { PageData } from './$types';

	import TabA from './components/TabA.svelte';
	import TabB from './components/TabB.svelte';
	import TabC from './components/TabC.svelte';
  import { tabsConfig } from './config';
	
	export let data: PageData;

  let currentTab: typeof TabA | typeof TabB | typeof TabC = TabA;
  
	const setTab = (tab: typeof TabA | typeof TabB | typeof TabC) => {
    currentTab = tab;
	};
  const config = tabsConfig(setTab);

	// $: console.log(`data.objects: [${JSON.stringify(data.objects, undefined, 2)}]`);
</script>

<main class="m-5">
	<div class="flex flex-row">
		<button
			on:click={() => (currentTab = TabA)}
			class="py-4 px-8 m-2 ml-0 bg-blue-500 rounded-lg shadow-lg text-white">TabA</button
		>
		<button
			on:click={() => (currentTab = TabB)}
			class="py-4 px-8 m-2 bg-blue-500 rounded-lg shadow-lg text-white">TabB</button
		>
		<button
			on:click={() => (currentTab = TabC)}
			class="py-4 px-8 m-2 bg-blue-500 rounded-lg shadow-lg text-white">TabC</button
		>
	</div>
	<div class="bg-white p-5 rounded-lg shadow-lg">
		<svelte:component this={currentTab} />
	</div>
</main>

<main class="m-5">
	<div class="flex flex-row">
		{#each config as object (object.id)}
			<svelte:component this={object.component} props={object.props} />
		{/each}
	</div>
	<div class="bg-white p-5 rounded-lg shadow-lg">
		<svelte:component this={currentTab} />
	</div>
</main>

<style>
	/* your styles go here */
</style>
