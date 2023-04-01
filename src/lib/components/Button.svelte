<script lang="ts">
  export let clickHandle: () => void;
</script> 

<button on:click={clickHandle}  class="bg-blue-600 hover:bg-blue-800 text-white p-5 m-5 rounded-md shadow-xl hover:shadow" >
  <slot />
</button>