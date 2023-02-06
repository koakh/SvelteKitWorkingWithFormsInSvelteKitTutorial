<script lang="ts">
	const names = [
		{
			firstName: 'Bruce',
			lastName: 'Wayne',
		},
		{
			firstName: 'Clark',
			lastName: 'Kent',
		},
		{
			firstName: 'Princess',
			lastName: 'Diana',
		},
	];
</script>

<main>
	<div class="mx-5">
		<ul>
			{#each names as name (name)}
				<li class="text-xl">
          <!-- pass data to parent component -->
					<slot name="hero" firstName={name.firstName} lastName={name.lastName} />
				</li>
			{/each}
		</ul>
		<div />
	</div>
</main>
