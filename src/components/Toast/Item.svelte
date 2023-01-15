<script lang="ts">
	import { messages, ToastType, type IMessage } from "./index";
  import CheckCircle from "@/icons/CheckCircle.svelte";
  import ExclamationCircle from "@/icons/ExclamationCircle.svelte";
  import InfoCircle from "@/icons/InfoCircle.svelte";
  import XMarkCircle from "@/icons/XMarkCircle.svelte";

  export let item: IMessage
</script>

<div class={`toast toast-${item.type}`}>
  <div class="toast-icon">
    { #if item.type === ToastType.SUCCESS }
      <CheckCircle />
    { :else if item.type === ToastType.DANGER }
      <XMarkCircle />
    { :else if item.type === ToastType.WARNING }
      <ExclamationCircle />
    { :else if item.type === ToastType.INFO }
      <InfoCircle />
    { :else }
      <span>:-()</span>
    { /if }
  </div>

  <div class="toast-message">
    { item.message }
  </div>
</div>

<style lang="postcss">
.toast {
  @apply flex bg-zinc-800 text-white rounded shadow-lg w-full mb-2;

  &.toast-success {
    @apply bg-green-600;
  }

  &.toast-danger {
    @apply bg-red-600;
  }

  &.toast-warning {
    @apply bg-yellow-400;
  }

  &.toast-info {
    @apply bg-cyan-400;
  }

  .toast-icon {
    @apply py-2 px-4;
    @apply flex flex-col items-center justify-center;
    
    svg {
      @apply w-4 h-4;
    }
  }

  .toast-icon {
    @apply inline-block w-4;
  }

  .toast-message {
    @apply py-2 px-4 flex-shrink grow;
  }
}
</style>