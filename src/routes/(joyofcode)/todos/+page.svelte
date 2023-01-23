<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	let loading = false;

	// Customize The Enhance Action To Show A Loading UI
	//
	// The input contains:
	// - action for the URL details
	// - cancel to prevent the submission
	// - controller is the AbortController you can use to cancel a request
	// - data is the FormData object
	// - form is the <form> element
	//
	// The options contains:
	// -- action for the URL details
	// -- form is the <form> element
	// -- result which is an ActionResult object
	// -- update function that runs the regular logic, otherwise you would have to do it yourself
	const addTodo: SubmitFunction = (input) => {
		// start loading state
		loading = true;

		// do something before the form submits
		console.log(input);

		return async (options) => {
			// do something after the form submits
			// console.log(options)

			const { update } = options;
			// stopping loading state
			loading = false;
			await update();
		};
	};
</script>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form method="POST" action="?/removeTodo" use:enhance>
				<input type="hidden" name="id" value={todo.id} />
				<button class="delete" type="submit">❌</button>
			</form>
		</li>
	{/each}
</ul>

<!-- note for use:enhance={addTodo} to use the Customized Enhance Action with Show A Loading UI -->
<form method="POST" action="?/addTodo" use:enhance={addTodo}>
	<input type="text" name="todo" value={form?.todo ?? ''} />
	{#if form?.missing}
		<p class="error">This field is required</p>
	{/if}

  <button aria-busy={loading} class:secondary={loading} type="submit">
    {#if !loading}+ Add todo{/if}
  </button>

	<button formaction="?/clearTodos" class="secondary" type="submit"> Clear </button>
</form>

{#if form?.success}
	<p>Added todo! 🥳</p>
{/if}

<style>
	ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		text-transform: capitalize;
	}

	.delete {
		margin: 0;
		background: none;
		border: none;
	}

	.error {
		color: tomato;
	}
</style>
