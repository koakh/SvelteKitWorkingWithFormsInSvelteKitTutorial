<script lang="ts">
  import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';

	type Data = {
		success: boolean;
		errors: Record<string, string>;
	};

	export let data: PageData;

	// used in the template
	let form: Data;

	async function addTodo(event: Event) {
		const formEl = event.target as HTMLFormElement;
		const data = new FormData(formEl);

		// you can see everything about the form
		console.dir(form);

		const response = await fetch(formEl.action, {
			method: 'POST',
			body: data
		});
		const responseData = await response.json();

		// { success: true, errors: {} } object
		form = responseData;

		// reset form
		formEl.reset();

		// rerun `load` function for the page
		await invalidateAll();
	}

	async function removeTodo(event: Event) {
		const formEl = event.target as HTMLFormElement;
		const data = new FormData(formEl);

		// forms only support `GET` and `POST` methods but
		// SvelteKit maps this to the `DELETE` function
		const response = await fetch(formEl.action, {
			method: 'DELETE',
			body: data
		});

		await invalidateAll();
	}
</script>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form on:submit|preventDefault={removeTodo} method="POST">
				<input type="hidden" name="id" value={todo.id} />
				<button class="delete" type="submit">❌</button>
			</form>
		</li>
	{/each}
</ul>

<form on:submit|preventDefault={addTodo} method="POST">
	<input type="text" name="todo" id="todo" />
	<button type="submit">+ Add Todo</button>
</form>

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
