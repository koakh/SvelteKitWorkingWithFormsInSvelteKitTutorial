<script lang="ts">
  import { isOverlayOpen } from "$lib/stores";
  // handlers
  const handleShowModalButtonClick = () => {
    isOverlayOpen.set(true);
  }
</script>

<div>
	<button class="bg-blue-600 hover:bg-blue-800 text-white p-5 m-5 rounded-md shadow-xl hover:shadow" on:click={handleShowModalButtonClick}>Show Modal</button>
</div>
