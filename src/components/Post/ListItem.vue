<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{ post: any, tag?: string }>(), {
  tag: 'h4'
})

const shortText = computed(() => props.post.body.substr(0, 24))
</script>

<template>
  <div class="post-item">
    <span class="comments-count">
      {{ post.comments?.length }}
    </span>

    <Component :is="tag" class="text-lg mb-3">
      {{ post.title }}
    </Component>

    <div class="post-content">
      {{ shortText }}
    </div>

    <div class="post-footer">
      <RouterLink :to="{ name: 'post-auther', params: { id: post.id } }" class="auther">
        <span>{{ post.auther?.name }}</span>

        <small>{{ post.auther?.email }}</small>
      </RouterLink>

      <RouterLink :to="{ name: 'post', params: { id: post.id } }">More...</RouterLink>
    </div>

  </div>
</template>

<style lang="postcss" scoped>
.post-item {
  @apply p-3 pb-0 border rounded mb-4 relative transition hover:shadow-lg;

  .post-footer {
    @apply flex justify-between py-3;

    .auther {
      @apply flex flex-col text-indigo-600 hover:text-indigo-800;
    }
  }

  .comments-count {
    @apply absolute right-2 bg-cyan-500 rounded-full w-5 h-5 text-sm flex items-center justify-center text-white empty:hidden;
  }
}
</style>