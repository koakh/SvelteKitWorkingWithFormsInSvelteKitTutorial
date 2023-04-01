<script lang="ts" context="module">
	export enum MessageType {
		DEFAULT = 'blue',
		SUCCESS = 'green',
		WARN = 'orange',
		DANGER = 'red',
	}
</script>

<script lang="ts">
	import { capitalizeWord, getEnumIndexByEnumValue } from '$lib/utils';

  // props
	export let title: string = '';
	export let type: MessageType = MessageType.DEFAULT;
	export let useTitle: boolean = false;

	// if title is not submitted, fill it based on type
	if (useTitle && title === '') {
		const key = getEnumIndexByEnumValue(MessageType, type);
		if (key >= 0) {
			title = capitalizeWord(Object.keys(MessageType)[key]);
		}
	}
</script>

<div role="alert">
	{#if useTitle}
		<div class={`bg-${type}-500 text-white font-bold rounded-t px-4 py-2`}>{title}</div>
	{/if}
	<div class={`border border-${type}-400 rounded-b bg-${type}-100 px-4 py-3 text-${type}-700 my-4 sm:mt-3`}>
		<slot />
	</div>
</div>
