<script lang="ts">
  export let props: {label: string, clickHandle: () => void};
</script>

<button
	on:click={props.clickHandle}
	class="py-4 px-8 m-2 ml-0 bg-blue-500 rounded-lg shadow-lg text-white"
>
	{props.label}
</button>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
