<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../login/$types';

	export let form: ActionData;
</script>

<form method="POST" use:enhance>
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
