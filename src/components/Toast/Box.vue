<script lang="ts">
export enum EnumTypes {
  sucess = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
}

export interface IProps {
  type: EnumTypes,
  message: string | string[]
}
</script>

<script lang="ts" setup>
import CheckCircle from '@/components/icons/CheckCircle.vue'
import XMarkCircle from '@/components/icons/XMarkCircle.vue'
import Exalamationcircle from '@/components/icons/ExclamationCircle.vue'
import Infocircle from '@/components/icons/InfoCircle.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
defineProps<IProps>()

onMounted(() => {
  setTimeout(() => {
    store.commit('removeToast')
  }, 2000);
})
</script>

<template>
  <div :class="['toast', `toast-${type}`]">
    <div class="toast-icon">
      <CheckCircle v-if="(type === EnumTypes.sucess)" />
      <XMarkCircle v-else-if="type === EnumTypes.danger" />
      <Exalamationcircle v-else-if="(type === EnumTypes.warning)" />
      <Infocircle v-else-if="(type === EnumTypes.info)" />
    </div>

    <div class="toast-message">
      {{ typeof message === 'string' ? message : message.join('\n\r') }}
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.toast {
  @apply flex bg-zinc-800 text-white rounded shadow-lg w-full;

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
      width: 1rem;
      height: 1rem;
    }
  }

  .toast-message {
    @apply py-2 px-4 flex-shrink grow;
  }
}
</style>