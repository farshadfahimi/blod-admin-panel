<script lang="ts" setup>
import type { Category } from '@/interface'

defineProps<{ category: Category }>()
</script>

<template>
  <RouterLink :to="{ name: 'category-show', params: { id: category.slug } }" class="category-container">
    {{ category.title }}
  </RouterLink>
</template>

<style scoped lang="postcss">
.category-container {
  @apply py-3 px-7 rounded-md hover:bg-indigo-600 flex items-center justify-center hover:text-white hover:shadow-2xl transition ease-in-out;
}
</style>