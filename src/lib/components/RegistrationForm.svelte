<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	// props
	export let form: ActionData;

	const required = false;
	console.log(`form: [${JSON.stringify(form, undefined, 2)}]`);

	$: console.log(form);
</script>

<form method="post" action="?/registration" use:enhance>
	<input type="email" name="email" placeholder="Email" value={form?.email ?? ''} {required} />
	{#if form?.missing}
		<p class="error">This field is required</p>
	{/if}
	<input type="password" name="password" placeholder="Password" aria-label="Password" {required} />
	<select name="role" aria-label="Role" {required}>
		<option value="frontend-engineer">Frontend Engineer</option>
		<option value="backend-engineer">Backend Engineer</option>
		<option value="fullstack-engineer">Fullstack Engineer</option>
		<option value="architect">Architect</option>
	</select>

	<button type="submit">Submit</button>
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
