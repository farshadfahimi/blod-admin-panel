<script lang="ts">
import { fade } from 'svelte/transition'
import { messages } from "./index";
import ToastItem from './Item.svelte'
</script>

<div class="toast-wrapper" transition:fade>
  {#each $messages as item, i}
    <ToastItem {item} />
  {/each}
</div>

<style lang="postcss">
.toast-wrapper {
  @apply flex flex-col items-center fixed z-50 w-4/12 right-8 bottom-4;

  > * {
    @apply mb-2 last:mb-0;
  }
}
</style>