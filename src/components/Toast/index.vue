<script lang="ts" setup>
import ToastBox from './Box.vue'
import { useStore } from 'vuex'
const store = useStore()
</script>

<template>
  <div class="toast-wrapper">
    <TransitionGroup name="fade">
      <ToastBox v-for="(toast, index) of store.state.toasts" :key="`toast-item-${index}`" :type="toast.type" :message="toast.message" />
    </TransitionGroup>
  </div>
</template>

<style lang="postcss" scoped>
.fade-move, /* apply transition to moving elements */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}

.toast-wrapper {
  @apply flex flex-col items-center fixed z-50;
  width: 350px;
  right: 2rem;
  bottom: 1rem;

  > * {
    @apply mb-2 last:mb-0;
  }
}
</style>