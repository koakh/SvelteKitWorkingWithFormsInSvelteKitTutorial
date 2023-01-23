<script lang="ts">
	import type { PageData } from './$types';

	type Data = {
		message: string;
	};

	export let data: PageData;
</script>

<h1>{data.message}</h1>

<form method="post" action="/login">
	<input type="text" name="user" id="name" />
	<input type="password" name="password" id="password" />
	<button type="submit">Login</button>
</form>
