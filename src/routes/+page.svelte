<script lang="ts">
	import type { ActionData } from './$types';
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';

	export let form: ActionData;

	const login: SubmitFunction = () => {
		return async ({ update, result }) => {
			// That won’t work because update can’t update form and $form.page from anywhere else
			// but you can use applyAction and pass it result to customize the use:enhance behavior further.
			// await update()

			// result is an ActionResult object but I haven’t talk about its properties which are:
			//
			// - data returned from the action
			// - status code
			// - type which can be success, failure, redirect, error
			//
			// Using applyAction(result) is going to do different things based on result.type:
			//
			// -- success and failure is going to update form, $page.form and $page.status regardless where you’re submitting from
			// -- redirect is going to invoke goto(result.location)
			// -- error is going to render the nearest +error.svelte page
			await applyAction(result);
		};
	};
</script>

<form method="POST" action="/login-with-zod" use:enhance={login}>
  <!-- user -->
	<label for="user">
		User
		<input type="text" name="user" value={form?.data?.user ?? ''} aria-invalid={form?.errors?.user ? true : false} />
	</label>
	{#if form?.errors?.user}
		<p class="error">{form?.errors?.user}</p>
	{/if}
  <!-- password -->
  <label for="password">
    Password
    <input type="password" name="password" value={form?.data?.password ?? ''} aria-invalid={form?.errors?.password ? true : false} />
  </label>
	{#if form?.errors?.password}
		<p class="error">{form?.errors?.password}</p>
	{/if}
  <!-- submit button -->
	<button type="submit">Login</button>
</form>

<style>
	.error {
		color: tomato;
	}
</style>
